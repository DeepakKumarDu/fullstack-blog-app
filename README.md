# Full Stack Blog Application

A modern full-stack blog application built with React, Node.js, GraphQL, and MongoDB. This application allows users to view and create blog posts with a responsive, user-friendly interface.

##  Features

- **View Blog Posts**: Display all blog posts with titles, descriptions, and content
- **Create New Posts**: Add new blog posts through an intuitive form
- **Responsive Design**: Fully responsive layout that works on all devices
- **Real-time Updates**: Automatic refresh of posts after creating new ones
- **Delete Posts**: Remove posts with confirmation dialog
- **Modern UI**: Clean, professional design with smooth animations
- **Form Validation**: Client-side validation with helpful error messages
- **Loading States**: Visual feedback during data operations

##  Tech Stack

### Frontend
- **React 18** with TypeScript
- **Apollo Client** for GraphQL state management
- **CSS3** with responsive design
- **Modern React Hooks** (useState, useQuery, useMutation)

### Backend
- **Node.js** with Express
- **Apollo Server** for GraphQL API
- **MongoDB** with Mongoose ODM
- **CORS** enabled for cross-origin requests

### Database
- **MongoDB** for data persistence
- **Mongoose** for object modeling

##  Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

##  Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone <your-repository-url>
cd fullstack-blog-app
\`\`\`

### 2. Install Dependencies

Install dependencies for both frontend and backend:

\`\`\`bash
# Install root dependencies
npm install

# Install server dependencies
npm run install-server

# Install client dependencies
npm run install-client
\`\`\`

### 3. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service:
   \`\`\`bash
   mongod
   \`\`\`

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the connection string in \`server/server.js\`:
   \`\`\`javascript
   await mongoose.connect('your-mongodb-atlas-connection-string', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });
   \`\`\`

### 4. Environment Variables (Optional)

Create a \`.env\` file in the server directory for environment-specific configurations:

\`\`\`env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/blogapp
NODE_ENV=development
\`\`\`

## 🚀 Running the Application

### Development Mode

Run both frontend and backend concurrently:

\`\`\`bash
npm run dev
\`\`\`

This will start:
- Backend server on http://localhost:4000
- Frontend application on http://localhost:3000
- GraphQL Playground on http://localhost:4000/graphql

### Run Individually

#### Backend Only
\`\`\`bash
npm run server
\`\`\`

#### Frontend Only
\`\`\`bash
npm run client
\`\`\`

## 📁 Project Structure

\`\`\`
fullstack-blog-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── apollo/        # GraphQL client setup
│   │   ├── components/    # React components
│   │   ├── App.tsx        # Main App component
│   │   ├── App.css        # Styles
│   │   └── index.tsx      # Entry point
│   └── package.json
├── server/                # Node.js backend
│   ├── models/           # MongoDB models
│   ├── resolvers.js      # GraphQL resolvers
│   ├── schema.js         # GraphQL schema
│   ├── server.js         # Express server setup
│   └── package.json
├── package.json          # Root package.json
└── README.md
\`\`\`

## 🔍 API Documentation

### GraphQL Schema

#### Types
\`\`\`graphql
type Post {
  id: ID!
  title: String!
  content: String!
  description: String!
  createdAt: String!
  updatedAt: String!
}
\`\`\`

#### Queries
\`\`\`graphql
# Get all posts
posts: [Post!]!

# Get single post by ID
post(id: ID!): Post
\`\`\`

#### Mutations
\`\`\`graphql
# Create new post
createPost(input: CreatePostInput!): Post!

# Update existing post
updatePost(id: ID!, input: UpdatePostInput!): Post

# Delete post
deletePost(id: ID!): Boolean!
\`\`\`

## 🎨 UI Components

### Main Components
- **Header**: Navigation and branding
- **PostList**: Displays all blog posts
- **PostCard**: Individual post display with actions
- **PostForm**: Form for creating new posts
- **LoadingSpinner**: Loading state indicator

### Features
- **Responsive Design**: Mobile-first approach
- **Form Validation**: Real-time validation with error messages
- **Confirmation Dialogs**: Safe deletion with user confirmation
- **Loading States**: Visual feedback during operations
- **Error Handling**: Graceful error display and recovery

## 🧪 Testing

### Manual Testing Checklist
- [ ] View all posts on homepage
- [ ] Create new post with valid data
- [ ] Form validation with invalid data
- [ ] Delete post with confirmation
- [ ] Responsive design on mobile devices
- [ ] Loading states during operations

### Future Testing Improvements
- Unit tests with Jest and React Testing Library
- Integration tests for GraphQL operations
- End-to-end tests with Cypress

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the client:
   \`\`\`bash
   cd client && npm run build
   \`\`\`
2. Deploy the \`build\` folder to your hosting service

### Backend Deployment (Heroku/Railway)
1. Set environment variables
2. Deploy the \`server\` folder
3. Update frontend API endpoint

### Database Deployment
- Use MongoDB Atlas for production database
- Update connection string in production environment

## 🔧 Troubleshooting

### Common Issues

#### MongoDB Connection Error
- Ensure MongoDB is running locally
- Check connection string format
- Verify network connectivity for Atlas

#### CORS Issues
- Verify CORS is enabled in server
- Check frontend API endpoint configuration

#### Port Conflicts
- Change ports in package.json scripts if needed
- Ensure no other services are using ports 3000/4000

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature-name\`
3. Commit changes: \`git commit -am 'Add feature'\`
4. Push to branch: \`git push origin feature-name\`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Your Name - [your.email@example.com](mailto:your.email@example.com)

## 🙏 Acknowledgments

- React team for the amazing framework
- Apollo team for GraphQL tooling
- MongoDB team for the database
- Open source community for inspiration

---

**Happy Coding! 🎉**
\`\`\`
