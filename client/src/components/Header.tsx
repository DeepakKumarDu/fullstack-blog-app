import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">BlogApp</h1>
          <nav className="nav">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
