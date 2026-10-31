import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ToastContainer, Bounce, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedLayout from "./components/ProtectedLayout";
import AuthProtectedRoute from "./components/AuthProtectedRoute";
import RouteFallback from "./components/RouteFallback";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";


const App = () => {

  
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="flex h-screen">
        
            <div className="w-22 border-2">
              <Sidebar />
            </div>
          

          <div>
            <Routes>
              <Route element={<AuthProtectedRoute />}>
                <Route path="*" element={<RouteFallback />} />
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route element={<ProtectedLayout />}>
                <Route path="*" element={<RouteFallback />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
