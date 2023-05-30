import React,{useState} from "react";
import "./App.css"
 import Home from "./components/home/Home";
 import Blog from "./components/blog/Blog";
 import Team from "./components/team/Team"
 import About from "./components/about/About"
 import Privacy from "./components/policy/Privacy"
 import Contact from "./components/contact/Contact"
 import LoginPage from './components/login/LoginPage'
import Header from "./components/common/header/Header";
 import Footer from "./components/common/footer/Footer"
 import GetSeminar from "./components/seminar/GetSeminar";
 import PostSeminar from "./components/seminar/PostSeminar";
 import CourseHome from "./components/allcourses/CourseHome"
 import RegisterPage from './components/register/RegisterPage'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
 import Getallbooks from './components/common/getallbook/GetallBooks'
 import UploadFiles from "./components/common/getallbook/UploadFiles"
 import Certificate from "./components/certificate/Certificate"
 import PostBlog from "./components/blog/PostBlog";
 import './components/common/header/header.css'
 
 function App() {
 

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
       
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/allbooks" element={<Getallbooks />} />
          <Route path="/postblog" element={<PostBlog />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/uploadbook" element={<UploadFiles />} />
          <Route path="/postseminar" element={<PostSeminar />} />
          <Route path="/seminar" element={<GetSeminar />} />
          <Route path="/cert" element={<Certificate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
