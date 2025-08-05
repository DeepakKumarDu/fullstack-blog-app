const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const mongoose = require("mongoose")
const cors = require("cors")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")

async function startServer() {
  const app = express()

  // Enable CORS
  app.use(cors())

  // Connect to MongoDB
  try {
    await mongoose.connect("mongodb://localhost:27017/blogapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  })

  await server.start()
  server.applyMiddleware({ app, path: "/graphql" })

  const PORT = process.env.PORT || 4000

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`)
  })
}

startServer().catch((error) => {
  console.error("Error starting server:", error)
})
