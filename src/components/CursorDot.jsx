import React, { useEffect, useRef } from 'react';

const CursorDot = () => {
    const dotRef = useRef(null);
    const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const current = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const rafRef = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            // Smooth lerp follow
            current.current.x += (pos.current.x - current.current.x) * 0.12;
            current.current.y += (pos.current.y - current.current.y) * 0.12;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${current.current.x - 6}px, ${current.current.y - 6}px)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMove);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            ref={dotRef}
            className="cursor-dot"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'white',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference',
                willChange: 'transform',
                boxShadow: '0 0 8px 2px rgba(255,255,255,0.5)',
                // Hide on touch devices via CSS
                display: window.matchMedia('(pointer: fine)').matches ? 'block' : 'none',
            }}
        />
    );
};

export default CursorDot;
