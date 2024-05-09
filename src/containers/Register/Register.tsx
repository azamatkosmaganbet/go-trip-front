
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { Context } from "@/store/context";
import { observer } from "mobx-react-lite";
import google from "@/assets/icons/flat-color-icons_google.png";
import facebook from "@/assets/icons/logos_facebook.png";
const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await store.registration(email, password, name, surname, phone, navigate);
      await store.login(email, password, navigate);
      setEmail("");
      setName("");
      setSurname("");
      setPassword("");
      setPhone("");
      
    } catch (error) {
      alert("Что то пошло не так");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth().then(() => {
        navigate("/");
      });
    }
  }, [navigate, store]);

  if (store.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <form className="registration-form" onSubmit={submitHandler}>
        <h2 className="title">Sign Up</h2>
        <div className="form-name">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              id="name"
              name="name"
              value={name}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              type="text"
              id="surname"
              name="surname"
              value={surname}
              required
              placeholder="Enter your surname"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="tel"
            value={phone}
            id="phone"
            name="phone"
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            value={email}
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
            placeholder="At least 8 characters"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            placeholder="Confirm your password"
          />
        </div>
        <div className="form-group-checkbox">
          <input type="checkbox" id="agree-terms" name="agree-terms" required />
          <label htmlFor="agree-terms">
            I agree to all terms and Privacy Policy
          </label>
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-divider">or</div>
        <div className="login-social">
          <div className="login-social-flex">
            <img
              src={google}
              alt="Logo"
            />
            <p>Continue with Google</p>
          </div>
          <div className="login-social-flex">
            <img src={facebook} alt="Logo" />
            <p>Continue with Facebook</p>
          </div>
        </div>
        <div className="login-signup">
          Don't have account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default observer(Register);
