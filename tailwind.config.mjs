
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                surface: "var(--surface)",
                text: "var(--text)",
                muted: "var(--muted)",
                border: "var(--border)",
                accent: "var(--accent)",
                card: "var(--card)",
            },
        },
    },
    plugins: [],
};
