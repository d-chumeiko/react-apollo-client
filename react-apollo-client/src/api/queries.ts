import { gql } from '@apollo/client';

export const GET_POSTS_API = gql`
  query GetPosts($limit: Int!) {
    posts(options: { paginate: { limit: $limit } }) {
      data {
        id
        title
        body
      }
    }
  }
`;

export const UPDATE_POST_API = gql`
  mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;
