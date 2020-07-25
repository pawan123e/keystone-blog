/** @jsx jsx */
import { jsx } from '@emotion/core';
import Link from 'next/link';

import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useState } from 'react';

import styled from '@emotion/styled';

import Layout from '../../templates/layout';
import { Banner } from '../../components/banner';

import { withApollo } from '../../lib/apollo';

const FormGroup = styled.div({
  display: 'flex',
  marginBottom: 8,
  width: '100%',
  maxWidth: 500,
});

const Label = styled.label({
  width: 200,
});

const Input = styled.input({
  width: '100%',
  padding: 8,
  fontSize: '1em',
  borderRadius: 4,
  border: '1px solid hsl(200,20%,70%)',
});

const ADD_POST = gql`
  mutation AddPost($title: String!, $body: String!, $prepTime: String!, 
    $cookTime: String!, $calories: String!, $posted: DateTime!, $image: Upload!) {
    createPost(data: { title: $title, body: $body, posted: $posted, image: $image, prepTime: $prepTime, cookTime: $cookTime, calories: $calories,}) {
      id
      slug
    }
  }
`;

export default withApollo(() => {
  const [title, setTitle] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [calories, setCalories] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [slug, setSlug] = useState('');

  const { data, loading: userLoading, error: userError } = useQuery(gql`
    query {
      authenticatedUser {
        id
      }
    }
  `);

  const [createPost, { error: saveError, loading: savingPost }] = useMutation(ADD_POST, {
    update: (cache, { data: { createPost } }) => {
      setSlug(createPost.slug);
    },
  });

  const loggedIn = !userLoading && !!data.authenticatedUser;
  const formDisabled = !loggedIn || savingPost;
  const error = userError || saveError;

  return (
    <Layout>
      <div css={{ margin: '4rem 20rem' }}>
        <Link href="/" passHref>
          <a css={{ color: 'hsl(200,20%,50%)', cursor: 'pointer' }}>{'< Go Back'}</a>
        </Link>
        <h1>New Post</h1>

        {slug && (
          <Banner style="success">
            <strong>Success!</strong> Post has been created.{' '}
            <Link href={`/post/[slug]?slug=${slug}`} as={`/post/${slug}`} passHref>
              <a css={{ color: 'green' }}>Check it out</a>
            </Link>
          </Banner>
        )}

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
                to create a post.
              </Banner>
            )}
            <form
              disabled={formDisabled}
              onSubmit={e => {
                e.preventDefault();
                createPost({
                  variables: {
                    title,
                    body,
                    image,
                    prepTime,
                    calories,
                    cookTime,
                    posted: new Date(),
                  },
                });

                setTitle('');
                setBody('');
                setPrepTime('');
                setCookTime('');
                setCalories('');
              }}
            >
              <FormGroup>
                <Label htmlFor="title">Title:</Label>
                <Input
                  disabled={formDisabled}
                  type="text"
                  name="title"
                  value={title}
                  onChange={event => {
                    setTitle(event.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="body">Body:</Label>
                <textarea
                  disabled={formDisabled}
                  css={{
                    width: '100%',
                    padding: 8,
                    fontSize: '1em',
                    borderRadius: 4,
                    border: '1px solid hsl(200,20%,70%)',
                    height: 200,
                    resize: 'none',
                  }}
                  name="body"
                  value={body}
                  onChange={event => {
                    setBody(event.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="prepTime">Prep Time:</Label>
                <Input
                  disabled={formDisabled}
                  type="text"
                  name="prepTime"
                  value={prepTime}
                  onChange={event => {
                    setPrepTime(event.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="cookTime">Cook Time:</Label>
                <Input
                  disabled={formDisabled}
                  type="text"
                  name="cookTime"
                  value={cookTime}
                  onChange={event => {
                    setCookTime(event.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="calories">Calories:</Label>
                <Input
                  disabled={formDisabled}
                  type="text"
                  name="calories"
                  value={calories}
                  onChange={event => {
                    setCalories(event.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="image">Image URL:</Label>
                <Input
                  disabled={formDisabled}
                  type="file"
                  name="image"
                  // value={image}
                  onChange={event => {
                    setImage(event.target.files[0]);
                  }}
                />
              </FormGroup>
              <input type="submit" value="submit" disabled={formDisabled} />
            </form>
          </>
        )}
      </div>
    </Layout>
  );
});
