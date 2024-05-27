import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Article from "./pages/articles/Article"
import Login from "./pages/Register/Login"
import MyProfile from "./pages/MyProfile/MyProfile";
import Author from "./pages/Author/Author";
import SignUp from "./pages/Register/SignUp";
import Create from "./pages/Create/Create";
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/myProfile" element={<MyProfile />}></Route>
        <Route path="/author" element={<Author />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/read/:id" element={<Article />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter> 
  );
}
export default App;
