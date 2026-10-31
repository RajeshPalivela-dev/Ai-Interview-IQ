import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ToastContainer, Bounce, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedLayout from "./components/ProtectedLayout";
import AuthProtectedRoute from "./components/AuthProtectedRoute";
import RouteFallback from "./components/RouteFallback";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import NewInterview from "./pages/NewInterview";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import ContextProvider from "./components/ContextProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        
          <Routes>
          <Route element={<Layout />}>
            <Route element={<AuthProtectedRoute />}>
             
                <Route path="*" element={<RouteFallback />} />
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/new-interview" element={<NewInterview/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/history" element={<History/>}/>
            
            </Route>

            <Route element={<ProtectedLayout />}>
              <Route path="*" element={<RouteFallback />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Route>
        </Routes>
        
      </BrowserRouter>
    
        
    </>
  );
};

function Layout() {

  const location=useLocation()
  console.log(location.pathname)
  const isHiddenbar=location.pathname=="/signup"||location.pathname=="/login"
   console.log(isHiddenbar,"is")
  return (
    <div className="flex h-screen">
      {!isHiddenbar&&<div className="shadow-2xl  w-45 ">
        <Sidebar />
      </div>}

      <div className="w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
