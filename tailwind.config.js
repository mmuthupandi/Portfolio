/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                "background-light": "#ffffff",
                "background-dark": "#0a0a0a",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            }
        },
    },
    plugins: [],
}
