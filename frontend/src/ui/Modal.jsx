import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { Button } from "./Button";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  //   const ref = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <div className="z-1000 fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center overflow-y-scroll bg-gray-backdrop-color bg-cover bg-no-repeat !backdrop-blur-sm">
      <div
        className="boxShadow-lg fixed top-5 h-auto w-[35%] translate-x-2 transform rounded-2xl bg-white-A700 transition-transform duration-200 md:w-[50%] sm:w-full"
        // ref={ref}
      >
        <Button className="absolute right-0 border-none" onClick={close}>
          <HiXMark className="text-3xl text-black-900_01" />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
