import PropTypes from "prop-types";

import { Modal, Button } from "./";

const Confirm = ({ visible, text, onConfirm, onCancel }) => {
  return (
    <Modal visible={visible}>
      <p className="content__label">{text}</p>
      <Button className="content__button button_modal" onClick={onConfirm}>
        <span>Подтвердить</span>
      </Button>
      <Button className="content__button button_modal" onClick={onCancel}>
        <span>Отменить</span>
      </Button>
    </Modal>
  );
};

Confirm.propTypes = {
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Confirm;
