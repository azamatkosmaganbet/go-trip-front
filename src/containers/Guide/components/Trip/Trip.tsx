import { FC, useContext} from "react";
import "./Trip.scss";
import { ITrip } from "@/interfaces/ITrip";
import { Card } from "@/components/UI/Card/Card";
import { Title } from "@/components/UI/Title/Title";
import { BASE_URL } from "@/constants/api";
import BookingTrip from "@/containers/Booking/Bookings";
import { Context } from "@/store/context";

import { observer } from "mobx-react-lite";
interface TripProps {
  trips: ITrip[];
}

const Trip: FC<TripProps> = ({ trips }) => {
  const {store} = useContext(Context);

  return (
    <div className="trips">
      {trips.map((trip) => (
        <Card type="trip">
          <div
            className="trip-content"
            onClick={() => {
              store.setFirstModal(true);
            }}
          >
            <img
              className=""
              alt="Trip"
              src={`${BASE_URL}/trips/${trip.image}`}
            />
            <div className="trip-flex">
              <div className="trip-title">
                <div className="trip-details">
                  <Title className="trip-day" variant="h4">
                    <span>{trip.title}</span>
                  </Title>
                  <p>Trip description</p>
                </div>
                <h4>
                  From: 12/06/2024, 9 am.
                  <br /> Till: 12/06/2024, 11 pm.
                </h4>
              </div>
              <div className="trip-user">
                <a>
                  <div className="trip-user-top">
                    <div className="trip-user-top-title">
                      <h5>{trip.guide.name}</h5>
                      <button>200$</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <BookingTrip tripId={trip._id} />
          
        </Card>
      ))}
    </div>
  );
};

export default observer(Trip);
