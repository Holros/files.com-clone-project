import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./css/index.css";
import Aside from "./component/Aside";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPasssword";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";

function App() {
  console.log("App/Index.js rendered");
  return (
    <BrowserRouter>
    <div className="enclosure">
      <div className="main">
        <div className="navbar">
          <Link to="/">
            <h2>Files.com</h2>{" "}
          </Link>
        </div>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
          <br/>
          <br/>
          <br/>
          <p style={{margin:"0 20px", fontWeight:"normal"}}>This is a project I built to showcase my React skills, do well to click on <span style={{color:"green", fontWeight:"bold"}}>"Forgot password?"</span> and <span style={{color:"green", fontWeight:"bold"}}>"Don't have an account? Sign Up"</span> to see other aspects of this project, it's also worth noting that this project has an <span style={{color:"green", fontWeight:"bold"}}>Error Page</span>. Ensure to input data in the form and submit to see how inputted data was handled. <br/>
          Thanks.
          </p>  
          
      </div>
      <Aside />
    </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
