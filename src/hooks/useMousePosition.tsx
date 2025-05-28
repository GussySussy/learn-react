import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePositionX, setMousePositionX] = useState(0);
  const [mousePositionY, setMousePositionY] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePositionX(e.offsetX);
    setMousePositionY(e.offsetY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  });

  return [mousePositionX, mousePositionY];
};

export default useMousePosition;
