import React from 'react';
import './card.css'; 

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

const Card = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/57/22/human-avatar-man-isolated-icon-vector-11705722.jpg" // Replace with your image URL
          alt="profile"
          className="profile-image"
        />
      </div>
      <div className="card-content">
        <h2 className="name">HARINIVAAS TV</h2>
        <p className="description">I am a student at Kongu Engineering College, Erode.</p>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
};

export default App;
