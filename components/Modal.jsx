import PropTypes from "prop-types";

const Modal = ({ visible, children }) => {
  return (
    <>
      {visible ? (
        <div className="modal">
          <div className="modal__content">{children}</div>
        </div>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
