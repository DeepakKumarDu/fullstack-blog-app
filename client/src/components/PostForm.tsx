"use client"

import type React from "react"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_POST, GET_POSTS } from "../apollo/queries"

interface PostFormProps {
  onSuccess: () => void
}

const PostForm: React.FC<PostFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const [createPost, { loading }] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
    onCompleted: () => {
      setFormData({ title: "", description: "", content: "" })
      setErrors({})
      onSuccess()
    },
    onError: (error) => {
      console.error("Error creating post:", error)
      setErrors({ submit: "Error creating post. Please try again." })
    },
  })

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    } else if (formData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters long"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters long"
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required"
    } else if (formData.content.length < 20) {
      newErrors.content = "Content must be at least 20 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      await createPost({
        variables: {
          input: {
            title: formData.title.trim(),
            description: formData.description.trim(),
            content: formData.content.trim(),
          },
        },
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <div className="post-form-container">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`form-input ${errors.title ? "error" : ""}`}
            placeholder="Enter post title"
            disabled={loading}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`form-input ${errors.description ? "error" : ""}`}
            placeholder="Enter post description"
            disabled={loading}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="content">Content *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className={`form-textarea ${errors.content ? "error" : ""}`}
            placeholder="Enter post content"
            rows={6}
            disabled={loading}
          />
          {errors.content && <span className="error-message">{errors.content}</span>}
        </div>

        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostForm
