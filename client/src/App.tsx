"use client"

import { useState } from "react"
import { ApolloProvider } from "@apollo/client"
import client from "./apollo/client"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import Header from "./components/Header"
import "./App.css"

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <main className="main-content">
          <div className="container">
            <div className="header-section">
              <h1>Blog Posts</h1>
              <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Cancel" : "Add New Post"}
              </button>
            </div>

            {showForm && (
              <div className="form-section">
                <PostForm onSuccess={() => setShowForm(false)} />
              </div>
            )}

            <div className="posts-section">
              <PostList />
            </div>
          </div>
        </main>
      </div>
    </ApolloProvider>
  )
}

export default App
