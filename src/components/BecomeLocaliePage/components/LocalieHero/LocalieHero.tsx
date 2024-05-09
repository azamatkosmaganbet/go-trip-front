
import "./LocalieHero.scss";

const LocalieHero = () => {
  return (
    <div className="localie-hero">
      <img
        alt="Hero"
        src="/heroGuide/heroGuide.png"
      />
      <div className="localie-hero-content">
        <div className="localie-hero-text">
          <h2>
            Unlock your city's secrets <br />
            and Become a local legend!
          </h2>

          <button className="hero_btn">Become a GO</button>
        </div>
      </div>
    </div>
  );
};

export default LocalieHero;
