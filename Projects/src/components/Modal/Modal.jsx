import "./modal.css";

export const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close-btn">
          &times;
        </span>
        <div className="modal-header">
          {header ? header : "This is Modal Header"}
        </div>
        <div className="modal-body">{body ? body : "This is Modal Body"}</div>
        <div className="modal-footer">
          {footer ? footer : "This is Modal footer"}
        </div>
      </div>
    </div>
  );
};
