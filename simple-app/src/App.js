import React, { useState } from 'react';
import './App.css';

// Frontend React app
function App() {
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
        // The frontend app is a simple button that calls the backend API 
        // and displays the response message
        <div className="App">
            <header className="App-header">
                <button onClick={fetchMessage}>Get Message</button>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;