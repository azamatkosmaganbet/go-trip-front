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
  const navigate = useNavigate()
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
    navigate('/info/calendar');
  };
  return (
    <div>
      <Modal
        show={store.modalSecond}
        onHide={() => store.setSecondModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            <h1> Бронировать</h1>{" "}
            <p>
              Сейчас вы ничего не платите и ни на что не подписываетесь 😉 Эта
              форма перенесет вас в чат с локали, чтобы обсудить программу.
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ваш локали </Form.Label>
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

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Где </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>{store.trip.title}</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Дата </Form.Label>
              <Form.Control
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Как с вами связаться?</Form.Label>
              <Form.Control
                value={store.user.phone}
                type="tel"
                placeholder="Ваш номер телефона"
              />
            </Form.Group>
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
