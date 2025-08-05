import { gql } from "@apollo/client"

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      description
      content
      createdAt
      updatedAt
    }
  }
`

export const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      description
      content
      createdAt
      updatedAt
    }
  }
`

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`
