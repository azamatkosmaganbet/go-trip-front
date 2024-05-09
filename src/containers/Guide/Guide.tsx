import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { MdOutlineVerified } from "react-icons/md";
import { useParams } from "react-router-dom";

import "./Guide.scss";
import Trip from "./components/Trip/Trip";
import About from "./components/About/About";
import { Context } from "@/store/context";
import { BASE_URL } from "@/constants/api";

const Guide = () => {
  const { store } = useContext(Context);
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState<string>("1"); 

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    if (id) {
      store.getGuideById(id);
      store.getTripsByGuideId(id);
    }
  }, [id, store]);

  if (store.isLoading) {
    return (
      <div className="text-center mt-4" style={{ height: "100vh" }}>
        <Spinner className="text-primary" />
      </div>
    );
  }

  return (
    <>
      {store.guide && (
        <div className="guide-flex">
          <div className="btn-flex">
            <div className="guide-profile">
              <div className="guide-profile-avatar">
                <div className="guide-profile-avatar-inner">
                  <picture className="guide-profile-avatar-inner__picture">
                    <img
                      src={`${BASE_URL}/${store.guide.userId?.avatar}`}
                      alt={store.guide.userId?.name}
                    />
                  </picture>
                </div>
              </div>

              <div className="guide-profile-info">
                <div className="guide-profile-info__inner">
                  <div className="guide-profile-info__inner-data">
                    <div className="guide-profile-info__name">
                      <h4>{store.guide.userId?.name}</h4>
                      {store.guide.userId?.isActivated && (
                        <MdOutlineVerified fill="rgba(0, 153, 153, 0.6)" />
                      )}
                    </div>

                    <p className="guide-profile-info__desc">
                      {store.guide?.description}
                    </p>

                    <div className="guide-profile-info__followers">
                      <div className="guide-profile-info__followers-l">
                        <h5>120</h5>
                        <p>Travellers</p>
                      </div>

                      <a>
                        <div className="guide-profile-info__followers-r">
                          <h5>53</h5>
                          <p>Reviews</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="guide-profile-info__cities">
                    {store.guide.cities?.map((c) => (
                      <div
                        key={c._id}
                        className="guide-profile-info__cities-btn"
                      >
                        <h5>{c.name}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-guide-profile">Contact with GO</button>
          </div>

          <div className="guide-profile-right">
            <div className="guide-profile-nav">
              <div className="guide-profile-nav-list">
                <li
                  className={`guide-profile-nav-list-li ${
                    selectedItem !== "1" && "li-secondary"
                  }`}
                  onClick={() => handleItemClick("1")}
                >
                  {selectedItem === "1" && (
                    <div className="guide-profile-nav-list-li-line"></div>
                  )}
                  <span>About me</span>
                </li>
                <li
                  onClick={() => handleItemClick("2")}
                  className={`guide-profile-nav-list-li ${
                    selectedItem !== "2" && "li-secondary"
                  }`}
                >
                  {selectedItem === "2" && (
                    <div className="guide-profile-nav-list-li-line"></div>
                  )}
                  <span>Trips</span>
                </li>
                <li
                  onClick={() => handleItemClick("3")}
                  className={`guide-profile-nav-list-li ${
                    selectedItem !== "3" && "li-secondary"
                  }`}
                >
                  {selectedItem === "3" && (
                    <div className="guide-profile-nav-list-li-line"></div>
                  )}
                  <span>Stories</span>
                </li>
                <li
                  onClick={() => handleItemClick("4")}
                  className={`guide-profile-nav-list-li ${
                    selectedItem !== "4" && "li-secondary"
                  }`}
                >
                  {selectedItem === "4" && (
                    <div className="guide-profile-nav-list-li-line"></div>
                  )}
                  <span>Reviews</span>
                </li>
              </div>
            </div>
            {selectedItem === "1" && <About guide={store.guide} />}

            {selectedItem === "2" && <Trip trips={store.trips} />}
          </div>
        </div>
      )}
    </>
  );
};

export default observer(Guide);
