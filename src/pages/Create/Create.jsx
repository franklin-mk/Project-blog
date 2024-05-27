import React from "react";
import { useState } from "react";
import "./Create.css";
import Category from "./Category";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
//

export default function Create() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  //const [user, loading] = useAuthState(auth)
  const postCollectionRef = collection(db, "Posts");
  let navigate = useNavigate();

  /* if (!user) {
        navigate("/login")
        return null;
      } */

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/home"); //Navigate back to homepage after creating post
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected category: ${selectedCategory}`);
  };

  return (
    <>
      {/* <header className="sticky">
                <h1>CREATE POST</h1>
            </header> */}
      <div className="create">
              <img
                className="createImg"
                src="https://images.unsplash.com/photo-1610450620997-6921021865da?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        <form className="create">
          <div className="createForm">
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <input type="file" id="fileInput" className="chooseFile" />
          </div>
          <div className="createForm">
            <textarea
              className="writeText"
              type="text"
              placeholder="Create Post"
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <Category />
          </div>
          <button
            className="submitButton"
            type="submit"
            onSubmit={handleSubmit}
            onClick={createPost}
          >
            POST
          </button>
        </form>
      </div>
    </>
  );
}
