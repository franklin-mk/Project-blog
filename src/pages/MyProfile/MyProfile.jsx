import React from "react"
import "./MyProfile.css"
import { Link } from "react-router-dom";

export default function MyProfile() {
    return (
        <div className="prof-container">
            <div className="profile-header">
                <h1>MY PROFILE</h1>
            </div>
            <img src="https://images.pexels.com/photos/3746226/pexels-photo-3746226.jpeg" alt="pretty black lady" />
            <h4>My Username</h4>
            <input type="file" />
            <div className="details">
                <h3>My Details and Bio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam expedita, laboriosam totam nobis culpa dolores placeat cum iure dolor nemo nostrum repudiandae distinctio aut eius pariatur ab facere minima?</p>
            </div>
            <Link to="/create">
                <button className="submitButton"> CREATE POST</button>
            </Link>
            
            <section className="section-article">
                <h4>BOOK-MARKED ARTICLES</h4>
                <div className="rev-article">
                    <img src="https://images.pexels.com/photos/3746226/pexels-photo-3746226.jpeg" alt="pretty black lady" />
                    <h3>Headlines</h3>
                </div>
            </section>

            <section className="section-article">
            <h4>MY ARTICLES</h4>
                <div className="rev-article">
                    <img src="https://images.pexels.com/photos/3746226/pexels-photo-3746226.jpeg" alt="pretty black lady" />
                    <h3>Headlines</h3>
                </div>
            </section>
        </div>
    )

}