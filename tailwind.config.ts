module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neighborhood: {
          spruce: '#2E5E4E',     // primary
          goldenrod: '#E0B34F',  // accent / CTA
          mint: '#A8D5BA',       // secondary highlight
          rust: '#D96C33',       // alert / strong accent
          cloud: '#F9F9F6',      // background
          slate: '#4A4A4A',      // primary text
          disabled: '#C4C4C4',   // form disabled
          hover: '#F3C86C',      // CTA hover
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    // Add form styles plugin
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    // Add typography plugin for rich text content
    require('@tailwindcss/typography'),
    // Add aspect ratio plugin
    require('@tailwindcss/aspect-ratio'),
  ],
}
