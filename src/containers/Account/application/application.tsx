import { ChangeEvent, useContext, useState } from "react";
import "./applications.scss";
import { Context } from "@/store/context";
import application from "@/assets/main/application.png"
const Application = () => {
  const { store } = useContext(Context);
  const [formData, setFormData] = useState({
    born: "",
    live: "",
    traveled: "",
    cities: "",
    sights: "",
    guide: "",
    years: "",
    reviews: "",
    plan: "",
    languages: "",
    safety: "",
    response: "",
    prepare: "",
    confirm: "",
    userId: store.user.id,
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const sendGuideRequest = () => {
    store.createGuideRequest(formData);
  };
  return (
    <div className="application-container">
      <img src={application} alt="" />
      <div className="input-container">
        <h2>
          <span>STEP 1: </span> please fill out the form
        </h2>
        <div className="input">
          <div className="input-group">
            <label htmlFor="born">1. In what country were you born?</label>
            <input
              type="text"
              id="born"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="live">2. What country do you live in?</label>
            <input
              type="text"
              id="live"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="traveled">
              3. Which countries have you already traveled to?
            </label>
            <input
              type="text"
              id="traveled"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="cities">4. What cities have you visited?</label>
            <input
              type="text"
              id="cities"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="sights">
              5. What sights do you know about (history or interesting facts)?
            </label>
            <input
              type="text"
              id="sights"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="guide">
              6. Have you previously worked as a guide, or in travel agencies?
            </label>
            <input
              type="text"
              id="guide"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="years">
              7. If you worked, please write how many years/month? (If you
              didn’t work, just write about it)
            </label>
            <input
              type="text"
              id="years"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="reviews">
              8. Do you have any reviews or recommendations from previous
              clients or tour operators? Submit your contacts or recommendation
              document
            </label>
            <input
              type="text"
              id="reviews"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="plan">
              9. In which cities do you plan to organize trips?
            </label>
            <input
              type="text"
              id="plan"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="languages">
              10. What language(s) do you speak and in what languages can you
              conduct tours?
            </label>
            <input
              type="text"
              id="languages"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="safety">
              11. How do you ensure the safety of the group during the
              excursion?
            </label>
            <input
              type="text"
              id="safety"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="response">
              12. How do you respond to questions and requests from excursion
              participants?
            </label>
            <input
              type="text"
              id="response"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="prepare">
              13. How do you usually prepare for a trip? Do you use additional
              materials or literature?
            </label>
            <input
              type="text"
              id="prepare"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm">
              14. Confirm that you have previously been to the places that you
              mentioned in previous questions (photos, videos).
            </label>
            <input
              type="text"
              id="confirm"
              placeholder="Your answer"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button onClick={sendGuideRequest}>Save</button>
      </div>
    </div>
  );
};

export default Application;
