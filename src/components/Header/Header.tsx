import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { CiMenuBurger } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/store/context";
import { observer } from "mobx-react-lite";
import { BASE_URL } from "@/constants/api";
import logo from "@/assets/icons/logoTrip.png"
import home from "@/assets/icons/home.png"
import trips from "@/assets/icons/trips.png"
import chat from "@/assets/icons/chat.png"
import blog from "@/assets/icons/blog.png"
const Header = () => {
  const navigate = useNavigate();
  const { store } = useContext(Context);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
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
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-logo" style={{cursor: "pointer"}} onClick={()=>{navigate('/')}}>
            <img src={logo} alt="Logo" />
          </div>
          <div className="burger-icon" onClick={toggleMenu}>
            <CiMenuBurger />
          </div>
          <div className={`header-buttons${showMenu ? "show-menu" : ""}`}>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="header-button"
            >
              <img src={home} alt="Button 1" />
            </button>
            <button
              onClick={() => {
                navigate("/info/calendar");
              }}
              className="header-button"
            >
              <img src={trips}alt="Button 2" />
            </button>
            <button
              onClick={() => {
                navigate("");
              }}
              className="header-button"
            >
              <img src={chat} alt="Button 3" />
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="header-button"
            >
              <img src={blog} alt="Button 4" />
            </button>
          </div>
          <div className="header-auth">
            {store.isAuth ? (
              <div className="header-avatar">
                <img
                  className="avatar-img"
                  src={`${BASE_URL}/${store.user.avatar}`}
                  alt="Avatar"
                  onClick={() => {
                    navigate(`account/${store.user.id}`);
                  }}
                />
                <button className="header-auth-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
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
