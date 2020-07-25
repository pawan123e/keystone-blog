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
    <div className='post'>
        <Link href={`/post/[slug]?slug=${post.slug}`} as={`/post/${post.slug}`} passHref>
        <a>
        <div className = 'postImage'>
        {post.image ? <img src={post.image.publicUrl} /> : null}
        </div>
        </a>
        </Link>
        <article css={{ padding: '1em' }}>
        <Link href={`/post/[slug]?slug=${post.slug}`} as={`/post/${post.slug}`} passHref>
      <a><h3 css={{ marginTop: 0 }}>{post.title}</h3></a></Link>
          {/* <p css = {{margin: '0'}}>{post.body.slice(0,150)}...</p> */}
          <section dangerouslySetInnerHTML={{ __html: post.body.slice(0,150) + '...' }} />
          <div css={{ marginTop: '1em', borderTop: '1px solid hsl(200, 20%, 80%)' }}>
            <p css={{ fontSize: '0.8em', marginBottom: 0, color: 'hsl(200, 20%, 50%)' }}>
              Posted by {post.author ? post.author.name : 'someone'} on{' '}
              {format(parseISO(post.posted), 'dd/MM/yyyy')}
            </p>
          </div>
        </article>
    </div>
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
        max-width: 1200px;
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
        padding: 0.8rem 1.5rem;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .latest h2 {
        font-size: 2rem;
        color: black;
      }

      .posts {
        display: grid;
        // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-columns: repeat(3,1fr);
        grid-gap: 2rem;
        max-width: 1200px;
      }
      .posts .post {
        background: white;
        box-shadow: 0px 10px 20px hsla(200, 20%, 20%, 0.20);
        border-radius: 6px;
      }
      .post .postImage {
        height: 250px;
        width: 100%;
      }
      .postImage img {
        height: 100%;
        width: 100%;
      }
      .post article {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      article a {
        text-decoration: none;
      }
      article h3 {
        color: red;
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
