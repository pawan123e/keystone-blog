import Link from 'next/link';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { jsx, Global, css } from '@emotion/core';
import { format, parseISO } from 'date-fns';

import Layout from '../templates/layout';
import Header from '../components/header';
import { withApollo } from '../lib/apollo';

/** @jsx jsx */

const Post = ({ post }) => {
  return (
    <Link href={`/post/[slug]?slug=${post.slug}`} as={`/post/${post.slug}`} passHref>
      <a
        css={{
          display: 'block',
          background: 'white',
          boxShadow: '0px 10px 20px hsla(200, 20%, 20%, 0.20)',
          marginBottom: 32,
          cursor: 'pointer',
          borderRadius: 6,
          overflow: 'hidden',
        }}
      >
        {post.image ? <img src={post.image.publicUrl} css={{ width: '100%' }} /> : null}
        <article css={{ padding: '1em' }}>
          <h3 css={{ marginTop: 0 }}>{post.title}</h3>
          <section dangerouslySetInnerHTML={{ __html: post.body }} />
          <div css={{ marginTop: '1em', borderTop: '1px solid hsl(200, 20%, 80%)' }}>
            <p css={{ fontSize: '0.8em', marginBottom: 0, color: 'hsl(200, 20%, 50%)' }}>
              Posted by {post.author ? post.author.name : 'someone'} on{' '}
              {format(parseISO(post.posted), 'dd/MM/yyyy')}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default withApollo(() => {
  const { data, loading, error } = useQuery(gql`
    query {
      allPosts {
        title
        id
        body
        posted
        slug
        image {
          publicUrl
        }
        author {
          name
        }
      }
    }
  `);

  return (
    <>
    <Global 
    styles={
      css`
      .main {
        padding-top: 5rem;
        width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
        height: 100vh;
      }
      .content {
        width: 45%;
      }
      .foodPic {
        width: 50%;
        margin-left: auto;
      }
      .foodPic img {
        width: 100%;
        height: auto;
      }
      .content .content_heading {
        font-size: 2.8rem;
      }
      .content .btn {
        padding: 0.5rem 1.5rem;
        color: white;
        background: red;
        border-radius: 25px;
        border: none;
        outline: none;
        cursor: pointer;
      }
      .latest {
        width: 80%;
        margin: auto;
      }
      .latest h2 {
        font-size: 2rem;
        color: black;
      }

      .posts {
        display: grid;
        grid-template-columns: 
      }
      `
    }
    />
    <Layout>
      <Header />
      <div className = 'main'>
      <div className = 'content'>
      <h1 className='content_heading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
      <p className = 'content_detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, amet provident possimus saepe at ab consectetur culpa, eos itaque aliquid iste sunt excepturi exercitationem ut dolor accusamus repudiandae, debitis eius!</p>
      <button className = 'btn'>Get Started</button>
      </div>
      <div className = 'foodPic'>
      <img src = '../../public/images/food.png'/>
      </div>
      </div>
      <section className='latest'>
        <h2>Posts</h2>
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>Error!</p>
        ) : (
          <div className = 'posts'>
            {data.allPosts.length ? (
              data.allPosts.map(post => <Post post={post} key={post.id} />)
            ) : (
              <p>No posts to display</p>
            )}
          </div>
        )}
      </section>
    </Layout>
    </>
  );
});
