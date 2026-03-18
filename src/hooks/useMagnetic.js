import { useState } from 'react';

export function useMagnetic(ref) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMagneticMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const handleMagneticOut = () => {
    setPosition({ x: 0, y: 0 });
  };

  return { position, handleMagneticMove, handleMagneticOut };
}
