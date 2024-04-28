import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toast from "./components/Toast/Toast";
import { observer } from "mobx-react-lite";
import Layout from "./components/Layout/Layout";
import SomePage from "./containers/SomePage/sdas";
import "@/App.css";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
        <Route element={<Layout/>}>
        <Route element={<SomePage/>} path="/"/>
        
          {/* <Route element={<Main />} path="/" />
          <Route element={<Account />} path="/account/:id" />
          
          
          <Route element={<Verification />} path="/verification" />
          <Route element={<GuidePage />} path="/guide/:id" />
          <Route element={<TourPage />} path="/tour/:id" />
          <Route element={<City />} path="/city/:id" />
          <Route element={<CreateCity />} path="/create/city" />
          <Route element={<GuideList />} path="/guide/list" />
          <Route element={<BecomeLocalie />} path="/info/become-localie" />
          <Route element={<Quiz />} path="/account/application" />
          <Route element={<CreateTrip />} path="/create/trip" />
          <Route element={<MyTrips />} path="/my-trips/:id" />
          <Route element={<EditTour />} path="/tour/edit/:id" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default observer(App);
