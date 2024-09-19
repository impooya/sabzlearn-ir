import { createPortal } from "react-dom";
function Overlay() {
  return (
    <>
      {createPortal(
        <div className="bg-black/30 inset-0 absolute z-[99] h-screen w-screen hidden"></div>,
        document.getElementById("overlay")
      )}
    </>
  );
}

export default Overlay;
