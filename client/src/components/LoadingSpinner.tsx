import type React from "react"

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading posts...</p>
    </div>
  )
}

export default LoadingSpinner
