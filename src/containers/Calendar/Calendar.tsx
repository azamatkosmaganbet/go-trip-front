import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calendar.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/store/context";
import { BASE_URL } from "@/constants/api";
import { observer } from "mobx-react-lite";
import { IBooking } from "@/interfaces/IBooking";
import { IoStarSharp } from "react-icons/io5";
const MyCalendar = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (store.user.id) {
      store.getBookings();
    }
  }, [store.user.id]);
  const [booking, setbooking] = useState<IBooking>();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const eventsData = store.bookings.map((item) => ({
      title: "",
      start: new Date(item.date),
      end: "",
      bookingInfo: item,
    }));

    setEvents(eventsData);
  }, [store.bookings]);

  const handleEventClick = (eventInfo: any) => {
    const bookingEvent: IBooking = eventInfo.event.extendedProps.bookingInfo;
    const date = new Date(bookingEvent.date);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    console.log(bookingEvent.date);

    bookingEvent.date = formattedDate;
    setbooking(bookingEvent);
    store.getGuideById(bookingEvent.tour.guide);
  };

  if (store.isLoading) {
    return null;
  }

  return (
    <>
      {store.bookings && store.bookings.length > 0 ? (
        <div className="calendar-container">
          <div className="calendar">
            <div className="calendar-left">
              <p>
                Here all your planned trips. You will find an information for
                each trip as well you can planned new one.
              </p>
              <div className="calendar-left-block">
                <h4 className="calendar-title">17th of January</h4>
                <div className="calendar-guide">
                  <div style={{ flexGrow: 0.3 }}>Tourmate</div>
                  {store.guide &&
                  store.guide.userId &&
                  store.guide.userId.avatar ? (
                    <img
                      src={`${BASE_URL}/${store.guide.userId.avatar}`}
                      alt="not found"
                    />
                  ) : (
                    <img src="" alt="Pick a date" />
                  )}

                  <div className="calendar-guide-rang">
                    {store.guide &&
                    store.guide.userId &&
                    store.guide.userId.name ? (
                      <p>{store.guide.userId.name}</p>
                    ) : (
                      <p></p>
                    )}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                    </div>
                  </div>
                </div>
                <div className="calendar-info">
                  <p>Details: </p>{" "}
                  {booking ? (
                    <span>{booking?.tour.description}</span>
                  ) : (
                    <span>pick a date</span>
                  )}
                </div>
                <div className="calendar-info">
                  <p>Time: </p>{" "}
                  {booking ? (
                    <span>{booking.date}</span>
                  ) : (
                    <span>pick a date</span>
                  )}
                </div>
                <div className="calendar-info">
                  <p>Rendzvous point: </p> <span>{booking?.city}</span>
                </div>
                <div className="calendar-info">
                  <p>Note: </p> <span>{store.bookings[0].adults}</span>
                </div>
              </div>
            </div>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "title",
                center: "",
                end: "prev,today,next",
              }}
              viewHeight={"600px"}
              events={events}
              eventClick={handleEventClick}
            />
          </div>
        </div>
      ) : (
        <div className="noBooking">
          <div className="calendar-container">
            <div className="calendar">
              <div className="calendar-left">
                <p>
                  Here all your planned trips. You will find an information for
                  each trip as well you can planned new one.
                </p>
                <div className="calendar-left-block">
                  <h4 className="calendar-title">17th of January</h4>
                  <div className="calendar-guide">
                    <div style={{ flexGrow: 0.3 }}>Tourmate</div>
                    {store.guide &&
                    store.guide.userId &&
                    store.guide.userId.avatar ? (
                      <img
                        src={`${BASE_URL}/${store.guide.userId.avatar}`}
                        alt="not found"
                      />
                    ) : (
                      <span>No booking</span>
                    )}

                    <div className="calendar-guide-rang">
                      {store.guide &&
                      store.guide.userId &&
                      store.guide.userId.name ? (
                        <p>{store.guide.userId.name}</p>
                      ) : (
                        <p>No booking</p>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        No booking
                      </div>
                    </div>
                  </div>
                  <div className="calendar-info">
                    <p>Details: </p>{" "}
                    {booking ? (
                      <span>{booking?.tour.description}</span>
                    ) : (
                      <span>No booking</span>
                    )}
                  </div>
                  <div className="calendar-info">
                    <p>Time: </p>{" "}
                    {booking ? (
                      <span>{booking.date}</span>
                    ) : (
                      <span>No booking</span>
                    )}
                  </div>
                  <div className="calendar-info">
                    <p>Rendzvous point: </p>{" "}
                    <span>No booking</span>
                  </div>
                  <div className="calendar-info">
                    <p>Note: </p> <span>No booking</span>
                  </div>
                </div>
              </div>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  start: "title",
                  center: "",
                  end: "prev,today,next",
                }}
                viewHeight={"600px"}
                events={events}
                eventClick={handleEventClick}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(MyCalendar);
