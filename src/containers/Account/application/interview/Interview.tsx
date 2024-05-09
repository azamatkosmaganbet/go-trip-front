import { useNavigate } from "react-router-dom";
import "./interview.scss";
const Interview = () => {
  const navigate = useNavigate();
  return (
    <div className="interview-container">
      <img src="../../../../public/main/application.png" alt="" />

      <div className="interview">
        <h2>
          <span>STEP 2: </span> Interview
        </h2>
        <p>
          Video call interview with the administrator. On a first-come,
          first-served basis, the Administrator will make an appointment for you
          within 3 days and send all the information. Stay tuned!🧡
        </p>
        <img src="../../../../../public/main/interview.png" alt="" />
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
