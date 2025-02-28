import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to FarmIT </h1>
        <div className="btn">
          <button className="home-button" onClick={() => navigate("/login")}>
            Login
          </button>
                  <button className="home-button" onClick={() => navigate("/register")}>
                

            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;