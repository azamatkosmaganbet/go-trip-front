import { FC } from "react";
import { Link } from "react-router-dom";
import "./TourmateCard.scss";
import { BASE_URL } from "../../constants/api";
import { ICity } from "@/interfaces/ICity";
import { IGuide } from "@/interfaces/IGuide";


interface TourmateCardProps {
  tourmate: IGuide | ICity;
  type?: "default" | "city";
}

const TourmateCard: FC<TourmateCardProps> = ({
  tourmate,
  type = "default",
}) => {
  return (
    <>
      {type === "default" && (
        <Link
          to={`/guide/${(tourmate as IGuide).userId?._id}`}
          className="tourmate-card"
        >
          <div className="tourmate-card-inner">
            <div className="tourmate-card-inner-container">
              <img
                src={`${BASE_URL}/${(tourmate as IGuide).userId?.avatar}`}
                alt={(tourmate as IGuide).userId?.name}
              />
              <div className="tourmate-card-inner-container-bottom">
                <div className="tourmate-card-inner-container-bottom-p">
                  <div className="tourmate-card-inner-container-bottom-p-content">
                    <div className="tourmate-card-inner-container-bottom-p-content-title">
                      <p>{(tourmate as IGuide).userId?.name}</p>
                    </div>
                    <p className="tourmate-card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas nostrum quia voluptatem, soluta adipisci dolore cupiditate, natus exercitationem optio odit voluptates quod animi nemo quos officia et, enim nisi?
                    </p>
                    <div className="tourmate-card-city">
                      {(tourmate as IGuide).cities?.length > 0 &&
                        (tourmate as IGuide).cities.map((c) => (
                          <Link to={`/`} key={c._id}>
                            <h5>{c.name}</h5>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}

      {type === "city" && (
        <Link className="location-card" to={`/city/${(tourmate as ICity)._id}`}>
          <div className="location-content">
            <div className="location-content-inner">
              <img src={`${BASE_URL}/trips/${(tourmate as ICity).image}`} />
              <h2>{(tourmate as ICity).name}</h2>
            </div>
          </div>
          <p className="location-desc">500 excursions completed</p>
        </Link>
      )}
    </>
  );
};

export default TourmateCard;
