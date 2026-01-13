import React from 'react';

const CircleAvatar = ({ style }) => {
    return (
        <div
            id="circleAvatar"
            style={style}
            className="fixed top-4 left-4 z-50 transition-all duration-500 pointer-events-none"
        >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg bg-white dark:bg-black">
                <img
                    alt="Portrait of Muthupandi"
                    className="w-full h-full object-cover object-top"
                    src="/bg_removed.png"
                />
            </div>
        </div>
    );
};

export default CircleAvatar;
