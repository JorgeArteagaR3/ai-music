/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                mywhite: "#FBFBFF",
                myblack: "#0D1821",
                primary: "#F9E900",
                mypink: "#E88EED",
                mypurple: "#8B80F9",
                mygreen: "#0FFF95",
                myfucsia: "#F92A82",
            },
            fontFamily: {
                PTmono: ["PT Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
