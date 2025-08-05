"use client"

import type React from "react"
import { useState } from "react"

interface Post {
  id: string
  title: string
  description: string
  content: string
  createdAt: string
  updatedAt: string
}

interface PostCardProps {
  post: Post
  onDelete: () => void
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  const [showFullContent, setShowFullContent] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(Number.parseInt(dateString)).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const truncateContent = (content: string, maxLength = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + "..."
  }

  return (
    <div className="post-card">
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        <button className="btn btn-danger btn-small" onClick={onDelete} title="Delete post">
          Delete
        </button>
      </div>

      <p className="post-description">{post.description}</p>

      <div className="post-content">
        <p>{showFullContent ? post.content : truncateContent(post.content)}</p>
        {post.content.length > 150 && (
          <button className="btn btn-link" onClick={() => setShowFullContent(!showFullContent)}>
            {showFullContent ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="post-meta">
        <span className="post-date">Created: {formatDate(post.createdAt)}</span>
        {post.updatedAt !== post.createdAt && <span className="post-date">Updated: {formatDate(post.updatedAt)}</span>}
      </div>
    </div>
  )
}

export default PostCard
