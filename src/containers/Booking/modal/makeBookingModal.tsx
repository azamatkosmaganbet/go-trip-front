import { useContext, useEffect, useState } from "react";
import "./makeBookingModal.scss";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import { Context } from "@/store/context";
import { IBookingPost } from "@/interfaces/IBooking";
import { BASE_URL } from "@/constants/api";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function MakeBooking() {
  const { store } = useContext(Context);
  const [date, setDate] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      store.getTripById(id);
    }
  }, [id, store]);

  const onSubmit = () => {
    let data: IBookingPost = {
      date: date,
      name: store.user.name,
      city: store.trip.title,
      phoneNumber: store.user.phone,
      tourId: store.trip._id,
      guideId: store.trip.guide._id,
      userId: store.user.id,
    };

    store.setFirstModal(false);
    store.setSecondModal(true);
    store.createBooking(data);
    navigate("/");
  };
  return (
    <div>
      <Modal
        show={store.modalSecond}
        onHide={() => store.setSecondModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            <h1> Booking</h1>{" "}
            <p>
              You are not going to pay anything, after that you are going to
              chat to talk about the tour in detail with host.
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Host</Form.Label>
              <div className="modal-user">
                <div
                  style={{
                    backgroundImage: `url(${BASE_URL}/${store.trip.guide?.avatar})`,
                  }}
                  className="modal-user-avatar"
                ></div>
                <p>
                  {store.trip.guide?.name} {store.trip.guide?.surname}
                </p>
              </div>
            </Form.Group>
            <div className="flex-module">
              <div>
                <Form.Label>Where</Form.Label>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Select aria-label="Default select example">
                    <option>{store.trip.title}</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div>
                <Form.Label>When</Form.Label>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    type="date"
                    placeholder=""
                  />
                </Form.Group>
              </div>
            </div>
            <div className="form-contacts">
              <Form.Label>YOUR CONTACTS</Form.Label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  value={store.user.phone}
                  type="tel"
                  placeholder="Ваш номер телефона"
                />
              </Form.Group>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="btn text-white bg-orange"
            onClick={onSubmit}
          >
            Забронировать
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default observer(MakeBooking);
