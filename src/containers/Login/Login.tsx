import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Context } from "@/store/context";
import logo from "@/assets/icons/logoTrip.png"
import login1 from "@/assets/icons/login1.png"
import login2 from "@/assets/icons/login2.png"
import login3 from "@/assets/icons/login3.png"
import login4 from "@/assets/icons/login4.png"
import login5 from "@/assets/icons/login5.png"
import login6 from "@/assets/icons/login6.png"
import login7 from "@/assets/icons/login7.png"
import login8 from "@/assets/icons/login8.png"
import login9 from "@/assets/icons/login9.png"
import login10 from "@/assets/icons/login10.png"
import google from "@/assets/icons/flat-color-icons_google.png";
import facebook from "@/assets/icons/logos_facebook.png";
const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth().then(() => {
        navigate("/");
      });
    }
  }, [navigate, store]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    store.login(email, password, navigate);
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>

      <main className="login-main">
        <div className="login-photos">
          <div className="login-photos-column">
            <img src={login1} alt="Photo 1" />
            <img src={login2}  alt="Photo 2" />
          </div>
          <div className="login-photos-column">
            <img src={login3}  alt="Photo 3" />
            <img src={login4}  alt="Photo 4" />
            <img src={login5}  alt="Photo 5" />
          </div>
          <div className="login-photos-column">
            <img src={login6}  alt="Photo 1" />
            <img src={login7}  alt="Photo 2" />
          </div>
          <div className="login-photos-column">
            <img src={login8}  alt="Photo 3" />
            <img src={login9}  alt="Photo 4" />
            <img src={login10}  alt="Photo 5" />
          </div>
        </div>
        <div className="login-form">
          <div className="title">
            <span className="title-top">Hi, welcome to</span>{" "}
            <span className="title-bot">GO Trip!</span>{" "}
          </div>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="At least 8 characters"
              />
              <div className="forgot-password">Forgot password?</div>
            </div>
            <button className="btn-login" type="submit">
              Login
            </button>
          </form>
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
            Don't have account? <a href="/register">Sign up</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default observer(Login);
