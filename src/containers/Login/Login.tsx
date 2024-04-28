import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Context } from "@/store/context";

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
          <img src="../../../public/icons/logoTrip.png" alt="Logo" />
        </div>
      </header>

      <main className="login-main">
        <div className="login-photos">
          <div className="login-photos-column">
            <img src="../../../public/icons/login1.png" alt="Photo 1" />
            <img src="../../../public/icons/login2.png" alt="Photo 2" />
          </div>
          <div className="login-photos-column">
            <img src="../../../public/icons/login3.png" alt="Photo 3" />
            <img src="../../../public/icons/login4.png" alt="Photo 4" />
            <img src="../../../public/icons/login5.png" alt="Photo 5" />
          </div>
          <div className="login-photos-column">
            <img src="../../../public/icons/login6.png" alt="Photo 1" />
            <img src="../../../public/icons/login7.png" alt="Photo 2" />
          </div>
          <div className="login-photos-column">
            <img src="../../../public/icons/login8.png" alt="Photo 3" />
            <img src="../../../public/icons/login9.png" alt="Photo 4" />
            <img src="../../../public/icons/login10.png" alt="Photo 5" />
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
                src="../../../public/icons/flat-color-icons_google.png"
                alt="Logo"
              />
              <p>Continue with Google</p>
            </div>
            <div className="login-social-flex">
              <img src="../../../public/icons/logos_facebook.png" alt="Logo" />
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
