import "./LocalieInstructions.scss";
const LocalieInstructions = () => {
  return (
    <div className="instructions">
      <div className="instructions-content">
        <div className="instructions-text">
          <h2>How to become a GO?</h2>
          <div className="instructions-info">
            <div className="instructions-info-step">
              <span>1</span>

              <p>To become our Tripmate, you need to fill out a form.</p>
            </div>

            <div className="instructions-info-step">
              <span>2</span>
              <p>Online meeting with the Administrator.</p>
            </div>

            <div className="instructions-info-step">
              <span>3</span>

              <p>
                Decision of the Administrator with the Council. We will
                definitely inform you about the results of the decision by mail.
              </p>
            </div>

            <div className="instructions-info-step">
              <span>4</span>
              <p>Welcome to Go Trip!</p>
            </div>
          </div>
          <div className="instructions-submit">
            <button>Become a GO 🧡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalieInstructions;
