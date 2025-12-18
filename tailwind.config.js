/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Custom Colors
      colors: {
        background: "#F4EFE7", // Creamy background
        foreground: "#1A1A1A", // Soft Black
        accent: "#8B7E6A",     // Expensive Latte
        muted: "#5A5A5A",      // Grey text
        holiday: "#C24E42",    // Christmas Red (Added this for you)
        gold: "#D4AF37",       // Christmas Gold (Added this for you)
      },
      
      // 2. Animations
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in-delayed': 'fadeIn 1.5s ease-out forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite', // <--- NEW: For Snowflakes
      },
      
      // 3. Keyframes
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, // <--- CHANGED: Must be -100% for seamless loop
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // <--- NEW: Twinkle Keyframes
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        }
      },
    },
  },
  plugins: [],
}