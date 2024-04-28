import { useNavigate } from "react-router-dom";
import "./Header.scss";

import { useContext, useEffect } from "react";
import { Context } from "@/store/context";
import { observer } from "mobx-react-lite";
const Header = () => {
  const navigate = useNavigate();
  const { store } = useContext(Context);
  console.log(store.isAuth);
  
  useEffect(() => {
    async function checkAuthentication() {
      if (localStorage.getItem("token")) {
        try {
          await store.checkAuth();
        } catch (e) {
          console.log(e);
        }
      }
    }

    checkAuthentication();
  }, [store]);

  const handleLogout = () => {
    store.logout();
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <img src="../../../public/icons/logoTrip.png" alt="Logo" />
          </div>

          <div className="header-buttons">
            <button className="header-button">
              <img src="../../../public/icons/home.png" alt="Button 1" />
            </button>
            <button className="header-button">
              <img src="../../../public/icons/trips.png" alt="Button 2" />
            </button>
            <button className="header-button">
              <img src="../../../public/icons/chat.png" alt="Button 3" />
            </button>
            <button className="header-button">
              <img src="../../../public/icons/blog.png" alt="Button 4" />
            </button>
          </div>
          <div className="header-auth">
            {store.isAuth ? (
              <button className="header-auth-button" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <button
                  className="header-auth-button"
                  onClick={() => navigate("login")}
                >
                  Login
                </button>
                <button
                  className="header-auth-button_right"
                  onClick={() => navigate("register")}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default observer(Header);
