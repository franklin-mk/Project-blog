import React from "react"
import "./Author.css"
import FollowButton from "./Follow-btn"

export default function Author() {
    return (
        <div className="prof-container">
                <div className="profile-header">
                    <h1>AUTHOR'S PROFILE</h1>
                </div>
                <img src="https://images.pexels.com/photos/7484556/pexels-photo-7484556.jpeg?cs=srgb&dl=pexels-ilabappa-7484556.jpg&fm=jpg&_gl=1*1d5sb7e*_ga*MTUwMDY4ODQ2Mi4xNzE1ODM5NjI4*_ga_8JE65Q40S6*MTcxNjY0OTQ1My44LjEuMTcxNjY0OTY0MS4wLjAuMA.." alt="author's profile" />
                <h4>Author's Name</h4>
                <input type="file" />
                <div>
                    <h3>Author Details and Bio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam expedita, laboriosam totam nobis culpa dolores placeat cum iure dolor nemo nostrum repudiandae distinctio aut eius pariatur ab facere minima?</p>
                </div>
                <FollowButton />
                <section>
                    <h4>MORE ARTICLES BY THE AUTHOR</h4>
                    <div className="rev-article">
                    <img src="https://images.pexels.com/photos/7484556/pexels-photo-7484556.jpeg?cs=srgb&dl=pexels-ilabappa-7484556.jpg&fm=jpg&_gl=1*1d5sb7e*_ga*MTUwMDY4ODQ2Mi4xNzE1ODM5NjI4*_ga_8JE65Q40S6*MTcxNjY0OTQ1My44LjEuMTcxNjY0OTY0MS4wLjAuMA.." alt="author's profile" />
                        <h3>Headlines</h3>
                    </div>
                </section>

                
            </div>
    )
} 