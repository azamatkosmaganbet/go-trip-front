import { FC, ReactNode } from "react";
import "./InfoCard.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

interface InfoCardProps {
  type: "solo" | "combined";
  title?: string;
  tag: string;
  color?: string;
  icon?: ReactNode;
  url?: string;
  logout?: () => void;
  deleteHandler?: () => void;
  whichHandler?: "delete" | "logout";
}

const InfoCard: FC<InfoCardProps> = ({
  type,
  title,
  tag,
  color,
  icon,
  url = "/",
  logout,
  deleteHandler,
  whichHandler,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {title && <span className="info-card-title">{title}</span>}
      <div
        className={classNames(
          type === "solo" && "profile-info-card",
          type === "combined" && "profile-info-combined-card",
          "profile-common-card"
        )}
        onClick={() => {
          if (whichHandler === "logout") {
            if (logout) {
              logout();
              navigate('/')
            }
          } else if (whichHandler === "delete") {
            if (deleteHandler) {
              deleteHandler();
            }
          } else {
            navigate(url);
          }
        }}
      >
        <span>{icon}</span>
        <p className={classNames(color === "red" && "red", "default")}>{tag}</p>
      </div>
    </>
  );
};

export default InfoCard;
