import Head from 'next/head';
import Link from 'next/link';

import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useState } from 'react';

import { jsx, Global, css } from '@emotion/core';
import { format, parseISO } from 'date-fns';

import Layout from '../../templates/layout';
import Header from '../../components/header';
import { Banner } from '../../components/banner';
import { withApollo } from '../../lib/apollo';

/** @jsx jsx */

const ADD_COMMENT = gql`
  mutation AddComment($body: String!, $postId: ID!, $posted: DateTime!) {
    createComment(
      data: { body: $body, originalPost: { connect: { id: $postId } }, posted: $posted }
    ) {
      id
      body
      author {
        name
        avatar {
          publicUrl
        }
      }
      posted
    }
  }
`;

const ALL_QUERIES = gql`
  query AllQueries($slug: String) {
    allPosts(where: { slug: $slug }) {
      id
      title
      slug
      body
      posted
      prepTime
      cookTime
      calories
      image {
        publicUrl
      }
      author {
        name
      }
    }

    allComments(where: { originalPost: { slug: $slug } }) {
      id
      body
      author {
        name
        avatar {
          publicUrl
        }
      }
      posted
    }
  }
`;

const imagePlaceholder = name => `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width="100" height="100">
<rect width="100" height="100" fill="hsl(200,20%,50%)" />
<text text-anchor="middle" x="50" y="67" fill="white" style="font-size: 50px; font-family: 'Rubik', sans-serif;">
${name.charAt(0)}</text></svg>`;

const Comments = ({ data }) => (
  <div>
    <h2>Comments</h2>
    {data.allComments.length
      ? data.allComments.map(comment => (
          <div
            key={comment.id}
            css={{
              marginBottom: 32,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={
                comment.author.avatar
                  ? comment.author.avatar.publicUrl
                  : imagePlaceholder(comment.author.name)
              }
              css={{ width: 48, height: 48, borderRadius: 32 }}
            />
            <div css={{ marginLeft: 16 }}>
              <p
                css={{
                  color: 'hsl(200,20%,50%)',
                  fontSize: '0.8em',
                  fontWeight: 800,
                  margin: '8px 0',
                }}
              >
                {comment.author.name} on {format(parseISO(comment.posted), 'dd MMM yyyy')}
              </p>
              <p css={{ margin: '8px 0' }}>{comment.body}</p>
            </div>
          </div>
        ))
      : 'No comments yet'}
  </div>
);

const AddComments = ({ post }) => {
  let [comment, setComment] = useState('');

  const { data, loading: userLoading, error: userError } = useQuery(gql`
    query {
      authenticatedUser {
        id
      }
    }
  `);

  const [createComment, { loading: savingComment, error: saveError }] = useMutation(ADD_COMMENT, {
    refetchQueries: ['AllQueries'],
  });

  const loggedIn = !userLoading && !!data.authenticatedUser;
  const formDisabled = !loggedIn || savingComment;
  const error = userError || saveError;

  return (
    <div>
      <h2>Add new Comment</h2>

      {userLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {error && (
            <Banner style={'error'}>
              <strong>Whoops!</strong> Something has gone wrong
              <br />
              {error.message || userError.toString()}
            </Banner>
          )}
          {!loggedIn && (
            <Banner style={'error'}>
              <a href="/signin" as="/signin">
                Sign In
              </a>{' '}
              to leave a comment.
            </Banner>
          )}
          <form
            onSubmit={e => {
              e.preventDefault();

              createComment({
                variables: {
                  body: comment,
                  postId: post.id,
                  posted: new Date(),
                },
              });

              setComment('');
            }}
          >
            <textarea
              type="text"
              placeholder="Write a comment"
              name="comment"
              disabled={formDisabled}
              css={{
                padding: 12,
                fontSize: 16,
                width: '100%',
                height: 60,
                border: 0,
                borderRadius: 6,
                resize: 'none',
              }}
              value={comment}
              onChange={event => {
                setComment(event.target.value);
              }}
            />

            <input
              type="submit"
              value="Submit"
              disabled={formDisabled}
              css={{
                padding: '6px 12px',
                borderRadius: 6,
                background: 'hsl(200, 20%, 50%)',
                fontSize: '1em',
                color: 'white',
                border: 0,
                marginTop: 6,
              }}
            />
          </form>
        </>
      )}
    </div>
  );
};

const Render = ({ children }) => children();

const PostPage = withApollo(({ slug }) => {
  const { data, loading, error } = useQuery(ALL_QUERIES, { variables: { slug } });

  return (
    <>
    <Global 
    styles={
      css`
      .post_data{
        padding-top: 5rem;
        width: 80%;
        margin: auto;
      }
      .main {
        display: flex;
        margin-top: 3rem;
      }
      .left {
        width: 70%;
      }
      .left .topPart {
        height: 340px;
        width: 100%;
        display: flex;
        border: 1px solid #e4e4e4;
        border-radius: 8px;
      }
      .topPart .foodImg {
        width: 75%;
        height: 100%;
      }
      .foodImg img {
         width: 100%;
         height: 100%;
      }
      .topPart .foodDetail {
        
        width: 25%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      `
    }
    />
    <Layout>
      <Header />
      <div className='post_data'>

        <Render>
          {() => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>Error!</p>;

            const post = data.allPosts && data.allPosts[0];

            if (!post) return <p>404: Post not found</p>;

            return (
              <>
                <div className='main'>
                  <Head>
                    <title>{post.title}</title>
                  </Head>
                  <div className='left'>
                  <h1 css={{ marginTop: 0 }}>{post.title}</h1>
                  <p>By {post.author ? post.author.name : 'someone'} | Updated: {format(parseISO(post.posted), 'dd/MM/yyyy')}</p>
                  <div className='topPart'>
                  <div className='foodImg'>{post.image ? <img src={post.image.publicUrl} css={{ width: '100%' }} /> : null}
                  </div>
                  <div className='foodDetail'>
                    <p>Prep Time {post.prepTime}</p>
                    <p>Cook Time {post.cookTime}</p>
                    <p>Calories {post.calories}</p>
                  </div>
                  </div>
                  {console.log('body of the post', post.body)}
                  <article css={{ padding: '1em 0' }}>
                      {/* <p className='postBody'>{post.body}</p> */}
                      <section dangerouslySetInnerHTML={{ __html: post.body }} />
                    <div css={{ marginTop: '1em', borderTop: '1px solid hsl(200, 20%, 80%)' }}>
                    </div>
                  </article>
                </div>
                </div>
                <Comments data={data} />

                <AddComments post={post} />
              </>
            );
          }}
        </Render>
      </div>
     
    </Layout>
    </>
    
  );
});

PostPage.getInitialProps = ({ query: { slug } }) => ({ slug });

export default PostPage;
