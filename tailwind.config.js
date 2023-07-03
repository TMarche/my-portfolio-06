/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: ["hidden"],
    theme: {
        extend: {
            colors: {
                "theme-blue": "#275ea3",
                "theme-light-blue": "#9ecfe7",
                "theme-black": "#000010",
                "theme-gray": "#4b5354",
                "theme-light-gray": "#e9edef",
            },
            fontFamily: {
                "roboto-slab": ["Roboto Slab", "serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
