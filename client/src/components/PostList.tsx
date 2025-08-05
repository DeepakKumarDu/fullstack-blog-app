import type React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { GET_POSTS, DELETE_POST } from "../apollo/queries"
import PostCard from "./PostCard"
import LoadingSpinner from "./LoadingSpinner"

interface Post {
  id: string
  title: string
  description: string
  content: string
  createdAt: string
  updatedAt: string
}

const PostList: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_POSTS)
  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: () => {
      refetch()
    },
    onError: (error) => {
      console.error("Error deleting post:", error)
      alert("Error deleting post. Please try again.")
    },
  })

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost({ variables: { id } })
      } catch (error) {
        console.error("Error deleting post:", error)
      }
    }
  }

  if (loading) return <LoadingSpinner />
  if (error) return <div className="error">Error loading posts: {error.message}</div>

  const posts: Post[] = data?.posts || []

  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <h3>No posts yet</h3>
        <p>Be the first to create a blog post!</p>
      </div>
    )
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={() => handleDelete(post.id)} />
      ))}
    </div>
  )
}

export default PostList
