import { observer } from "mobx-react-lite";
import "./Main.scss";
import Home from "@/components/Home/Home";


const Main = () => {
  return (
    <div >
      <Home />
    </div>
  );
};

export default observer(Main);
