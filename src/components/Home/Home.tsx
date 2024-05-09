import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";


import "./Home.scss";
import Info from "./components/Info/Info";
import { Context } from "@/store/context";
import Hero from "../Hero/Hero";
import TourmateList from "../TourmateList/TourmateList";
const Home = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  useEffect(() => {
    store.getGuides();
    store.getCities();
  }, []);

  // if (store.isLoading) {
  //   return (
  //     <div className="text-center">
  //       <Spinner className="text-primary" />
  //     </div>
  //   );
  // }
  return (
    <>
      <Hero />
     
      <Info />
      <TourmateList
        title="Expert guides reveal city secrets, enriching experiences."
        data={store.guides}
      />
       <TourmateList
        title="Our customers rave about us!"
        data={store.guides}
      />
      <TourmateList
        type="city"
        title="GO Trip is your gateway to adventure in major cities worldwide."
        data={store.cities}
      />
    </>
  );
};

export default observer(Home);
