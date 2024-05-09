import "./GoConfidents.scss";

const GoConfident = () => {
  return (
    <div className="go-confident">
      <div className="go-confident-content">
        <h2>Confidentiality and Finances</h2>
        <div className="go-confident-cards">
          <div className="go-confident-cards-step">
            <h6>All personal information is secure</h6>
            <p>
              All your personal information is kept secure. You control what is
              on your profile — you can even use a nickname if you'd prefer! All
              correspondence takes place on the Localie site using our own chat
              platform. There is no need to exchange personal details.
            </p>
          </div>

          <div className="go-confident-cards-step">
            <h6>Withdrawal of funds</h6>
            <p>
              All payments received in your Localie account can be transferred
              weekly to your bank account. You can set up a transfer directly
              with your bank Visa or Mastercard from any country*, or have it
              sent to your Payoneer account.
            </p>
          </div>

          <div className="go-confident-cards-step">
            <h6>Taxes</h6>
            <p>
              GO follows all local tax rules and regulations. We remind our GO
              that it is their obligation to declare all additional income
              earned through or in connection with GO, in accordance with the
              local laws and legislation of the country in which you reside.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoConfident;
