import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if(open){
      dialog.current.showModal();
    }else{
      dialog.current.close();
    }
  }, [open])

  // use effect runs only once so if open value changes it will run again thats why [open]

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
