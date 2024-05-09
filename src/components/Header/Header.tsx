import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { CiMenuBurger } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/store/context";
import { observer } from "mobx-react-lite";
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
            <img src="../../../public/icons/logoTrip.png" alt="Logo" />
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
              <img src="../../../public/icons/home.png" alt="Button 1" />
            </button>
            <button
              onClick={() => {
                navigate("/info/calendar");
              }}
              className="header-button"
            >
              <img src="../../../public/icons/trips.png" alt="Button 2" />
            </button>
            <button
              onClick={() => {
                navigate("");
              }}
              className="header-button"
            >
              <img src="../../../public/icons/chat.png" alt="Button 3" />
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="header-button"
            >
              <img src="../../../public/icons/blog.png" alt="Button 4" />
            </button>
          </div>
          <div className="header-auth">
            {store.isAuth ? (
              <div className="header-avatar">
                <img
                  className="avatar-img"
                  src={`http://localhost:5000/${store.user.avatar}`}
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
