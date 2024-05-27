import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <>
      <p className="Header-register">Welcome To My Health Assistant Blog App</p>
      <main className="Main-register">
        {success ? (
          <section>
            <p>
              <Link to="/home">Home</Link>
            </p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>LogIn</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username1">Username:</label>
              <input
                type="text"
                id="username1"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                placeholder="Enter Your UserName"
              />

              <label htmlFor="password1">Password:</label>
              <input
                type="password"
                id="password1"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                placeholder=" Enter Password"
              />
              <button>Sign In</button>
            </form>
            <p>
              Need an Account?
              <br />
              <span className="line">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export default Login;
