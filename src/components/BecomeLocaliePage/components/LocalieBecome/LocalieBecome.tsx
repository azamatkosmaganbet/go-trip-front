import "./LocalieBecome.scss";
import { Catalog } from "@/components/Catalog/Catalog";
import compas from "@/assets/icons_Go/compas.png";
import arrow from "@/assets/icons_Go/arrow.png";
import map from "@/assets/icons_Go/map.png";
import translate from "@/assets/icons_Go/translate.png";
import trail from "@/assets/icons_Go/map-trail.png";
const LocalieBecome = () => {
  const { Container } = Catalog;
  return (
    <div className="localie-become">
      <Container>
        <h2>
          Become a GO now! <br /> Communicate around the globe, inspire, help{" "}
          <br /> get rearded.
        </h2>
        <div className="localie-become-cards">
          <div className="localie-become-cards-step">
            <img src={compas} alt="" />
            <p>
              It's time to share your city as if it were a friend visiting you!
            </p>
            <img src={arrow} alt="" />
          </div>

          <div className="localie-become-cards-step">
            <img src={map} alt="" />
            <p>
              Give unforgettable personalised tours - anywhere from half a day
              to over a week!
            </p>
            <img src={arrow} alt="" />
          </div>

          <div className="localie-become-cards-step">
            <img src={translate} alt="" />
            <p>
              Meet other localies who provide language services and teach your
              language!
            </p>
            <img src={arrow} alt="" />
          </div>

          <div className="localie-become-cards-step">
            <img src={trail} alt="" />
            <p>
              Publish your own short destination guides to share with guests all
              over the world
            </p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LocalieBecome;
