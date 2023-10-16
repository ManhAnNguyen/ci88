import { useState } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const onHover = () => setIsHovered(true);
  const onRemoveHover = () => setIsHovered(false);

  return { isHovered, onHover, onRemoveHover };
}

export default useHover;
