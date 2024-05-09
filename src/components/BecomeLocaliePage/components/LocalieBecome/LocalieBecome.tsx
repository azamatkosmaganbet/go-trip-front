import "./LocalieBecome.scss";
import { Catalog } from "@/components/Catalog/Catalog";

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
            <img src="../../../../../public/icons_Go/compas.png" alt="" />
            <p>
              It's time to share your city as if it were a friend visiting you!
            </p>
            <img src="../../../../../public/icons_Go/arrow.png" alt="" />
          </div>

          <div className="localie-become-cards-step">
            <img src="../../../../../public/icons_Go/map.png" alt="" />
            <p>
              Give unforgettable personalised tours - anywhere from half a day
              to over a week!
            </p>
            <img src="../../../../../public/icons_Go/arrow.png" alt="" />
          </div>

          <div className="localie-become-cards-step">
            <img src="../../../../../public/icons_Go/translate.png" alt="" />
            <p>
              Meet other localies who provide language services and teach your
              language!
            </p>
            <img src="../../../../../public/icons_Go/arrow.png" alt="" />
          </div>

          <div className="localie-become-cards-step">
            <img src="../../../../../public/icons_Go/map-trail.png" alt="" />
            <p>
              Publish your own short destination guides to share with guests all
              over the world
            </p>
            <img src="../../../../../public/icons_Go/arrow.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LocalieBecome;
