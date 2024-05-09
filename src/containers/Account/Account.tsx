import { observer } from "mobx-react-lite";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import { useParams } from "react-router-dom";
import InfoCard from "../../components/InfoCard/InfoCard";
import { Title } from "../../components/UI/Title/Title";
import "./Account.scss";
import { Context } from "@/store/context";
import { FaUserCircle } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoHeartCircleOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
const Account = () => {
  const { store } = useContext(Context);

  const { id } = useParams<{ id: string }>();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  avatarFile;
  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files && e.target.files[0];
  //   setAvatarFile(file || null);
  // };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setAvatarFile(file || null);

    // Вызываем store.changeAvatar сразу после изменения файла
    if (file && id) {
      store.changeAvatar(id, file);
    }
  };

  const handleLogout = () => {
    store.logout();
  };

  return (
    <section className="main section">
      <div className="container">
        <div className="profile">
          <div className="profile-avatar">
            <form className="profile-avatar-form">
              <label className="profile-avatar-form__label">
                <input
                  onChange={handleFileChange}
                  type="file"
                  accept="*image"
                  multiple
                />
                <div className="profile-img">
                  {store.isLoading ? (
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="224"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                    </svg>
                  ) : store.user.avatar ? (
                    <img
                      alt=""
                      src={`http://localhost:5000/${store.user.avatar}`}
                    />
                  ) : (
                    <span className="default-user-avatar">
                      <FaUserCircle />
                    </span>
                  )}

                  <div className="profile-edit">
                    <svg
                      color="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 15"
                      className="sc-dkrGBB jhVyiZ  css-17jtmv1"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.05 4.75L10.25 6.95L6.35 10.85C6.25 10.95 6.15 11 6 11H4.5C4.2 11 4 10.8 4 10.5V9C4 8.85 4.05 8.75 4.15 8.65L8.05 4.75ZM11.85 4.65C12.05 4.85 12.05 5.15 11.85 5.35L10.95 6.25L8.75 4.05L9.65 3.15C9.85 2.95 10.15 2.95 10.35 3.15L11.85 4.65Z"
                        className="sc-eDvShL YFXNM"
                      ></path>
                    </svg>
                  </div>
                </div>
              </label>
            </form>

            <div className="profile-title">
              {store.isLoading ? (
                <p className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </p>
              ) : (
                <Title variant="h3">
                  {store.user.name} {store.user.surname}
                </Title>
              )}
            </div>
          </div>

          <div className="profile-info">
            <InfoCard
              tag="Personal information"
              type="solo"
              url="/info/become-localie"
              icon={<IoPersonOutline />}
            />

            <InfoCard
              tag="Become a GO"
              type="solo"
              title="My Go Profiles"
              url="/account/application"
              icon={<HiOutlineUserAdd />}
            />

            <InfoCard
              tag="Settings"
              type="solo"
              title="Settings"
              url={`/my-trips/${id}`}
              icon={<CiSettings />}
            />

            <div className="profile-cards">
              <InfoCard
                type="combined"
                title="Information"
                tag="Become a GO"
                url="/info/become-go"
                icon={<IoHeartCircleOutline />}
              />
              <InfoCard
                type="combined"
                tag="Contact Support"
                url="/guide/list"
                icon={<HiOutlineSupport />}
              />
              <InfoCard type="combined" tag="About us" icon={<BsPeople />} />
              <InfoCard
                type="combined"
                tag="Review"
                icon={<FaRegCommentDots />}
              />
              <InfoCard
                type="combined"
                tag="Delete my personal data"
                color="red"
                whichHandler="delete"
                icon={<FiTrash2 />}
              />
            </div>

            <InfoCard
              color="red"
              logout={handleLogout}
              whichHandler="logout"
              tag="Log out"
              type="solo"
              title="Log out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default observer(Account);
