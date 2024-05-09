import { useNavigate } from "react-router-dom";
import "./interview.scss";
import application from "@/assets/main/application.png"
import interview from "@/assets/main/interview.png"
const Interview = () => {
  const navigate = useNavigate();
  return (
    <div className="interview-container">
      <img src={application} alt="" />

      <div className="interview">
        <h2>
          <span>STEP 2: </span> Interview
        </h2>
        <p>
          Video call interview with the administrator. On a first-come,
          first-served basis, the Administrator will make an appointment for you
          within 3 days and send all the information. Stay tuned!🧡
        </p>
        <img src={interview} alt="" />
        <button
          className="btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Interview;
