const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    description: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: ID!, input: UpdatePostInput!): Post
    deletePost(id: ID!): Boolean!
  }

  input CreatePostInput {
    title: String!
    content: String!
    description: String!
  }

  input UpdatePostInput {
    title: String
    content: String
    description: String
  }
`

module.exports = typeDefs
