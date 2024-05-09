
import { useContext, useEffect } from "react";
import "./GuideListPage.scss";
import { MdOutlineDone } from "react-icons/md";
import { observer } from "mobx-react-lite";
import { Spinner } from "react-bootstrap";
import { Context } from "@/store/context";
import { TbPencilCancel } from "react-icons/tb";
const GuideListPage = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getGuides();
  }, [store]);

  if (store.isLoading) {
    return (
      <div className="city container text-center">
        <Spinner className="text-center text-primary" />
      </div>
    );
  }

  const updateHandler = (id: string, status: string) => {
    store.updateUserStatus(id, status);
  };

  return (
    <div className="city container">
      <div>
        <h2>User requests</h2>
      </div>
      <div className="table-container">
        <table className="table">
          <tbody>
           
            {store.guides.map((guide) => (
              <tr className="guide-list" key={guide.id}>
                <td>
                  <a className="link-primary">{guide.userId?.name}</a>
                </td>
                <td>
                  {guide.status === "accepted" ? (
                    <a
                      className="accepted"
                      onClick={() => {
                        updateHandler(guide._id, "pending");
                      }}
                    >
                      <TbPencilCancel color="#375E97" />
                    </a>
                  ) : (
                    <a
                      className="accepted"
                      onClick={() => {
                        updateHandler(guide._id, "accepted");
                      }}
                    >
                      <MdOutlineDone  color="#375E97"/>
                    </a>
                  )}
                  <a
                    className="cancel"
                    href="/edit/6569705d625846c424eea008"
                  >
                    X
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default observer(GuideListPage);
