// Theme configuration for SPACEZ offers page

// Color palette
const colors = {
  primary: '#C17A4A', // Orange/brown for branding and accents
  primaryHover: '#A66A3E',
  secondary: '#EC008C', // Pink/magenta for gift cards
  accent: '#004C8F', // Blue for payment offers
  background: '#F9FAFB', // Light gray background
  surface: '#FFFFFF',
  border: '#E5E7EB',
  text: {
    primary: '#171717',
    secondary: '#6B7280',
    tertiary: '#9CA3AF'
  },
  success: '#10B981',
  gradient: {
    orange: 'from-orange-500 to-orange-600',
    blue: 'from-blue-500 to-blue-600',
    orangeLight: 'from-orange-50 to-orange-100',
    pinkLight: 'from-pink-50 to-pink-100'
  }
};

// Typography
const typography = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem' // 30px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  }
};

// Spacing
const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem'   // 48px
};

// Border radius
const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px'
};

// Shadows
const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows
};