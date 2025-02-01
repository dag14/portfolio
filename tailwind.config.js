/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'bg-midnight-blue': '#1D2A64', // Background or header elements
        'text-charcoal-gray': '#2A2A2A', // Main text color for readability

        // Accent Colors
        'accent-emerald-green': '#2C9C68', // Buttons, call-to-actions, or highlights
        'accent-silver': '#C0C0C0', // Subtle details, hover effects, or borders

        // Supporting Colors
        'bg-main-card': '#E9D5A1', // Main background or card sections
        'text-dark-gray': '#333333', // Darker text for readability

        // Hover & Secondary
        'hover-light-silver': '#B8B8B8', // Hover effects, icon highlights, or secondary buttons
        'bg-platinum': '#B8B8B8', // Light platinum tones for additional subtle effects
      },
    },
  },
  plugins: [],
}
