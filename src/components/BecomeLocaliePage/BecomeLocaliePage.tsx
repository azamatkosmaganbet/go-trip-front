
import "./BecomeLocaliePage.scss";
import LocalieHero from "./components/LocalieHero/LocalieHero";
import LocalieFaq from "./components/LocalieFaq/LocalieFaq";
import LocalieInstructions from "./components/LocalieInstructions/LocalieInstructions";
import LocalieBecome from "./components/LocalieBecome/LocalieBecome";
import { Link } from "react-router-dom";
import GoCommision from "./components/GoCommision/GoCommision";
import GoConfident from "./components/GoConfident/GoConfident";
const BecomeLocaliePage = () => {
  return (
    <div className="localie">
      <div className="localie-content">
        <LocalieHero />
        <LocalieFaq />
        <LocalieInstructions />
        <LocalieBecome />
        <GoCommision/>
        <GoConfident/>
        <div className="about">
          <div className="about-container">
            <div className="about-container-content">
              <h1>
              GO is a community!A social network for expatsand passionate travelers
              </h1>
              <p>
              What unites us it the desire to share our love for the city which we now call home with travellers of the globe. We gladly help potential new citizens in their relocation process, be it for work, education or for leisure purposes. We conduct online tours and help people learn their target languages, but most of all we have fun sharing our passions online with each other.
              </p>
              <Link to="/account/application">Become a GO 🧡</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeLocaliePage;
