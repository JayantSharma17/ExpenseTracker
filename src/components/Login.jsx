import React, { useState } from "react";
import "./CSS/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";
import { BaseURL, message } from "../Global";
import { useNavbarContext } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { setReloadNavbar, reloadNavbar } = useNavbarContext();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log(email, password);
      if (!email || !password) {
        message("All input fields are required");
        return;
      }
      setLoader(true);
      const payload = { email, password };
      let res = await axios.post(`${BaseURL}/login`, payload);
      console.log(res.data.token);
      console.log(res.data.customerId);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("customerId", res.data.customerId);
      setLoader(false);
      setReloadNavbar(!reloadNavbar);

      // if (res.status === 200) {
      message("Logged In successfully");
      navigate("/");
      // }
    } catch (error) {
      setLoader(false);
      if (error.response) {
        if (error.response.status === 400) {
          message("Invalid login Credentials");
        }
      } else {
        message("Network Error");
      }
    }
  };
  return (
    <div className="login">
      <div className="loginDiv">
        <h1>Login Form</h1>
        <div className="roleDiv" id="roleDiv">
          <div className="roleLabel" id="roleLabel">
            {" "}
            Login as{" "}
          </div>
          <div className="roleRadio" id="roleRadio">
            <div>
              <input type="radio" id="seller" name="role" value="seller" />
              <label htmlFor="seller">Seller</label>
            </div>
            <div>
              <input type="radio" id="customer" name="role" value="customer" />
              <label htmlFor="customer">Customer</label>
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Email Id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <BallTriangle
          height={50}
          width={50}
          radius={5}
          color="white"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loader}
        />
        <button onClick={handleLogin}>{" Login "}</button>
        <p>
          Don't have an account?<Link to={"/register"}>SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
