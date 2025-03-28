# Reunion Hub - College Network Platform

A modern networking platform for students, faculty, and alumni to connect, share insights, and build professional relationships within the college community.

## Features
- User authentication with role-based access (Student/Faculty/Alumni)
- Profile management
- News feed with real-time updates
- Post creation with text and image support
- Like, comment, and subscribe functionality
- User search and networking
- Real-time notifications

## Tech Stack
- Frontend: Pure HTML5, CSS3, JavaScript (Vanilla)
- Backend: Node.js with Express
- Database: MongoDB
- Real-time Communication: Socket.io
- Authentication: JWT

## Project Structure
```
reunion_hub/
├── frontend/                 # Frontend application
│   ├── assets/              # Images, fonts, etc.
│   ├── css/                 # CSS files
│   │   ├── style.css       # Main styles
│   │   ├── auth.css        # Authentication styles
│   │   └── dashboard.css   # Dashboard styles
│   ├── js/                  # JavaScript files
│   │   ├── main.js         # Main JavaScript
│   │   ├── auth.js         # Authentication logic
│   │   └── dashboard.js    # Dashboard functionality
│   └── pages/              # HTML pages
│       ├── index.html      # Landing page
│       ├── login.html      # Login page
│       ├── register.html   # Registration page
│       ├── dashboard.html  # User dashboard
│       └── profile.html    # User profile
├── backend/                 # Backend Node.js application
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── utils/             # Utility functions
├── docs/                   # Documentation
└── README.md              # Project documentation
```

## Getting Started
1. Clone the repository
2. Install backend dependencies: `cd backend && npm install`
3. Set up environment variables
4. Start the backend server: `npm run dev`
5. Open frontend/pages/index.html in your browser

## Development
- Frontend: Open HTML files directly in browser or use a local server
- Backend: `npm run dev` (runs on http://localhost:5000)

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

