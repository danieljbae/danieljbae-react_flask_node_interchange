import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Importing necessary components for routing
import './App.css';

// Home component that fetches and displays the message from the backend
function Home() {
    // Create a state variable to store the message from the backend server
    const [message, setMessage] = useState('');

    // Function to call the backend API `/api/message`
    const fetchMessage = async () => {
        const response = await fetch('/api/message');
        const data = await response.json();
        setMessage(data.message);
    };

    // Return the frontend app UI
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={fetchMessage}>Get Message</button>
                <p>{message}</p>
            </header>
        </div>
    );
}

// About component to represent the About page
function About() {
    return <div>About Page</div>;
}

// Contact component to represent the Contact page
function Contact() {
    return <div>Contact Page</div>;
}

// Main App component that sets up 'virtual routing' for the React app
// meaning that the app does not reload the page when switching between routes
function App() {
    return (
        <Router>
            {/* Navigation links for the app */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            {/* Setting up routes for the app */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;