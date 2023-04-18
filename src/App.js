import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import { useState,useEffect } from 'react';
import Home from "../src/screens/pages/home/Home";
import About from "../src/screens/pages/about/About";
import Contact from "../src/screens/pages/contact/Contact";
import Blog from "../src/screens/pages/blog/Blog";
import BlogDetails from "../src/screens/pages/blog/BlogDetails";
import ServiceDetail from "./screens/pages/service-detail/serviceDetail";
import Error from "./screens/pages/Error";
import ProductDetail from "./screens/pages/Products/ProductDetails";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogdetail" element={<BlogDetails />} />
          <Route path="/services/:title" element={<ServiceDetail />} />
          <Route path="/products/:title" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
