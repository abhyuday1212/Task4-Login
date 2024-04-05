import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// *-**--*-*-*--*-*-*--*-*-*-*-*-**--*--*-*-
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar";
import Login from "./components/account/Login";
import NoMatch from "./components/noMatch/NoMatch";
import AboutUs from "./components/aboutUs/AboutUs"
import Blogs from "./components/blogs/Blogs";

// =============================


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Navbar />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false)

  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

        {/* Setting up a private route */}

        {/* Navbar Routes */}
        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/blogs" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/blogs" element={<Blogs />} />
        </Route>

        <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/about" element={<AboutUs />} />
        </Route>

        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
};

export default App;
