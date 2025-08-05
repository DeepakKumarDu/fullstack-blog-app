const Post = require("./models/Post")

const resolvers = {
  Query: {
    posts: async () => {
      try {
        const posts = await Post.find().sort({ createdAt: -1 })
        return posts
      } catch (error) {
        throw new Error("Error fetching posts: " + error.message)
      }
    },
    post: async (_, { id }) => {
      try {
        const post = await Post.findById(id)
        if (!post) {
          throw new Error("Post not found")
        }
        return post
      } catch (error) {
        throw new Error("Error fetching post: " + error.message)
      }
    },
  },

  Mutation: {
    createPost: async (_, { input }) => {
      try {
        const post = new Post({
          title: input.title,
          content: input.content,
          description: input.description,
        })
        const savedPost = await post.save()
        return savedPost
      } catch (error) {
        throw new Error("Error creating post: " + error.message)
      }
    },

    updatePost: async (_, { id, input }) => {
      try {
        const post = await Post.findByIdAndUpdate(id, { ...input, updatedAt: new Date() }, { new: true })
        if (!post) {
          throw new Error("Post not found")
        }
        return post
      } catch (error) {
        throw new Error("Error updating post: " + error.message)
      }
    },

    deletePost: async (_, { id }) => {
      try {
        const post = await Post.findByIdAndDelete(id)
        return !!post
      } catch (error) {
        throw new Error("Error deleting post: " + error.message)
      }
    },
  },
}

module.exports = resolvers
