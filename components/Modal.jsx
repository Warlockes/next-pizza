export default function Modal({ visible, children }) {
  return (
    <>
      {visible ? (
        <div className="modal">
          <div className="modal__content">{children}</div>
        </div>
      ) : null}
    </>
  );
}
