import "./GoCommision.scss";

const GoCommision = () => {
  return (
    <div className="go-commision">
      <div className="go-commision-content">
        <h2>
          GO takes a commission and offers round the clocksupport in all aspects
        </h2>
        <div className="go-commision-cards">
          <div className="go-commision-cards">
            <p>
              In order to provide the highest level of service, maintain our
              platform, offer round the clock support, and promote our Localies
              we take a commission on each transaction.
            </p>
          </div>

          <div className="go-commision-cards-step">
            <h6>29%</h6>
            <p>
            Upon withdrawal of funds from the GO platform
            </p>
          </div>

          <div className="go-commision-cards-step-blue">
            <h6>0</h6>
            <p>
            When paying for other GO services from your GO account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoCommision;
