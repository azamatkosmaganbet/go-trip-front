import "./Hero.scss";
import { CiSearch } from "react-icons/ci";
import hero from "@/assets/main/heroMain.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <picture className="hero-picture">
          <img
            alt="find a Go"
            src={hero}
          />
        </picture>
      </div>
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1>
          Experience the pulse of the <br/> city through  the eyes of a local <br/> expert.
          </h1>
          <p className="hero-content-inner-desc">
          Let GO Trip be your gateway to authentic adventures and unforgettable <br/> memories.
          </p>
          <div className="hero-search">
            <div className="hero-search-content">
              <input placeholder="Where are you going?"></input>
            </div>
            <button className="btn-search">
              <span>
                <CiSearch />
              </span>
              Find your GO
            </button>

            <button className="mb-btn-search">
              <CiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

