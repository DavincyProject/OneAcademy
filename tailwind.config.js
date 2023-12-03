/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                check: {
                    100: `#6148FF`,
                },
            },
        },
        daisyui: {
            themes: false,
        },
    },
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
