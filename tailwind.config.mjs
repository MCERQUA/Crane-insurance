/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@astrojs/tailwind/**/*.js',
  ],
  safelist: [
    'quick-answer',
    'blog-content',
    'info-box',
    'blog-feature-card',
    'pull-quote',
    'key-points',
    'key-points-title',
    'blog-highlight',
    'blog-divider',
    'info-box-title',
  ],
  theme: {
    extend: {
      colors: {
        // Heavy Equipment Palette - Industrial, Strong, Professional
        'construction-yellow': '#FFD700',    // Bright construction yellow
        'safety-yellow': '#FFEB3B',         // Safety/warning yellow
        'warning-yellow': '#FFC107',        // Medium warning yellow
        'amber': '#FF8F00',                 // Dark amber accent
        'caterpillar-yellow': '#FEDD00',    // CAT equipment yellow
        'steel-black': '#1A1A1A',           // Primary text black
        'charcoal-black': '#000000',        // Pure black for high contrast
        'iron-gray': '#4A4A4A',             // Medium gray for text
        
        // Gray Palette
        'machinery-gray': '#757575',        // Equipment gray
        'concrete-gray': '#E0E0E0',         // Light concrete
        'steel-gray': '#BDBDBD',            // Medium steel gray
        'dark-steel': '#2E2E2E',            // Dark industrial gray
        'aluminum': '#F5F5F5',              // Light aluminum
        
        // Functional colors
        'crane-yellow': '#FFEB3B',          // Crane highlight yellow
        'safety-orange': '#FF5722',         // Safety equipment orange
        
        // Blog Styling Colors (warm professional tones)
        'cream': '#FAF7F2',                 // Light cream background
        'sand': '#C8B89E',                  // Sand/beige accent
        'terra-cotta': '#D2691E',           // Terra cotta/rust orange
        'khaki': '#BDB76B',                 // Khaki green-brown
        'warm-gray': '#8B7355',             // Warm gray text
        'espresso': '#3E2723',              // Dark espresso brown
        'taupe': '#483C32',                 // Taupe brown
        'light-gray': '#F5F5F5',            // Light background gray
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
        xl: '20px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.15)',
        'text-glow': '0 0 10px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
