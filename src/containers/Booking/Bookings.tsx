import "./Bokkings.scss";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import { IoPerson } from "react-icons/io5";
import { Context } from "@/store/context";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
interface InitialState {
  tripId: string;
}


function BookingTrip({ tripId }: InitialState) {
  const { store } = useContext(Context);
const navigate = useNavigate()
  return (
    <div>
      <Modal show={store.modalFirst} onHide={() => store.setFirstModal(false)}>
        <Modal.Header closeButton>
          <h2>Be the first</h2>
          <span>
            No one has joined this trip yet. Nice chance to have a nice trip!
          </span>
        </Modal.Header>
        <Modal.Body>
          <IoPerson
            width={250}
            height={250}
            style={{ width: 250, height: 250 }}
          />
        </Modal.Body>
        <Modal.Footer>
          <div>
            <h2>100$ per person</h2>
            <p>100$ per day.</p>
          </div>
          <div className="modal-footer-btn">
            <button
              onClick={() => {
                store.setSecondModal(true);
                store.setFirstModal(false);
                navigate(`/trip/${tripId}`);
              }}
            >
              Book Now
            </button>
            <p>You won’t be charged yet.</p>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default observer(BookingTrip);
