import React from "react";

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, children }) => {
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
