import React from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

interface ConfirmProps {
  visible: boolean;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Confirm: React.FC<ConfirmProps> = ({
  visible,
  text,
  onConfirm,
  onCancel,
}) => {
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
