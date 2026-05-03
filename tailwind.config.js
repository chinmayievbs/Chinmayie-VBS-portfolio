/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            animation: {
                blob: "blob 7s infinite",
                glow: "glow 2s ease-in-out infinite alternate",
                'border-spin': 'border-spin 4s linear infinite',
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(168, 85, 247, 0.2), 0 0 20px rgba(168, 85, 247, 0.2)" },
                    "100%": { boxShadow: "0 0 10px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.4)" },
                },
                'border-spin': {
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
}
