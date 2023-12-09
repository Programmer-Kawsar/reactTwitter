import { FaXmark } from "react-icons/fa6";
import "./Modal.scss";
const modal = ({ headertitle, hide, children }) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <div className="first-head">
              <div onClick={hide} className="cross-btn">
                <FaXmark />
              </div>
              <div className="step">{headertitle}</div>
            </div>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default modal;
