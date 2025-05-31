import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/layouts/Home";
import ChiSiamo from "./components/layouts/ChiSiamo";
import PostList from "./components/layouts/PostList";
import Navbar from "./components/layouts/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </div>
    </>
  );
}
