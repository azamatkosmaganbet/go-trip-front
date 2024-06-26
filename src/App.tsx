import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toast from "./components/Toast/Toast";
import { observer } from "mobx-react-lite";
import Layout from "./components/Layout/Layout";
import "@/App.css";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Account from "./containers/Account/Account";
import BecomeLocalie from "./containers/BecomeLocalie/BecomeLocalie";
import Main from "./containers/Main/Main";
import Application from "./containers/Account/application/application";
import Interview from "./containers/Account/application/interview/Interview";
import MyCalendar from "./containers/Calendar/Calendar";
import Guide from "./containers/Guide/Guide";
import MakeBookingModal from "./containers/Booking/modal/makeBookingModal";
import GuideListPage from "./containers/GuideListPage/GuideListPage";
function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
        <Route element={<Layout/>}>
        <Route element={<Account />} path="/account/:id" />
        <Route element={<BecomeLocalie/>} path="/info/become-go"/>
        <Route element={<Main />} path="/" />
        <Route element={<Application />} path="/account/application" />
        <Route element={<Interview />} path="/info/interview" />
        <Route element={<MyCalendar />} path="/info/calendar" />
        <Route element={<Guide />} path="/guide/:id" />
        <Route element={<MakeBookingModal />} path="/booking" />
        <Route element={<MakeBookingModal />} path="/trip/:id" />
        <Route element={<GuideListPage />} path="/admin" />
          {/* 
         
          
          
          <Route element={<Verification />} path="/verification" />
         
          <Route element={<TourPage />} path="/tour/:id" />
          <Route element={<City />} path="/city/:id" />
          <Route element={<CreateCity />} path="/create/city" />
          <Route element={<GuideList />} path="/guide/list" />
          
          
          <Route element={<CreateTrip />} path="/create/trip" />
          <Route element={<MyTrips />} path="/my-trips/:id" />
          <Route element={<EditTour />} path="/tour/edit/:id" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default observer(App);
