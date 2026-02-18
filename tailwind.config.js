/** @type {import('tailwindcss').Config} */

module.exports = {

darkMode: 'class',

content: [

'./index.html',

'./src/**/*.{js,ts,jsx,tsx}',

],

theme: {

extend: {

colors: {

border: 'var(--color-border)', // slate-200

input: 'var(--color-input)', // slate-200

ring: 'var(--color-ring)', // blue-600

background: 'var(--color-background)', // slate-50

foreground: 'var(--color-foreground)', // slate-800

primary: {

DEFAULT: 'var(--color-primary)', // blue-600

foreground: 'var(--color-primary-foreground)', // white

},

secondary: {

DEFAULT: 'var(--color-secondary)', // violet-600

foreground: 'var(--color-secondary-foreground)', // white

},

destructive: {

DEFAULT: 'var(--color-destructive)', // red-500

foreground: 'var(--color-destructive-foreground)', // white

},

muted: {

DEFAULT: 'var(--color-muted)', // slate-100

foreground: 'var(--color-muted-foreground)', // slate-500

},

accent: {

DEFAULT: 'var(--color-accent)', // amber-500

foreground: 'var(--color-accent-foreground)', // gray-800

},

popover: {

DEFAULT: 'var(--color-popover)', // white

foreground: 'var(--color-popover-foreground)', // slate-700

},

card: {

DEFAULT: 'var(--color-card)', // white

foreground: 'var(--color-card-foreground)', // slate-700

},

success: {

DEFAULT: 'var(--color-success)', // emerald-500

foreground: 'var(--color-success-foreground)', // white

},

warning: {

DEFAULT: 'var(--color-warning)', // amber-500

foreground: 'var(--color-warning-foreground)', // gray-800

},

error: {

DEFAULT: 'var(--color-error)', // red-500

foreground: 'var(--color-error-foreground)', // white

},

},

fontFamily: {

heading: ['Outfit', 'sans-serif'],

body: ['Source Sans 3', 'sans-serif'],

caption: ['Inter', 'sans-serif'],

mono: ['JetBrains Mono', 'monospace'],

},

borderRadius: {

sm: '6px',

DEFAULT: '12px',

md: '12px',

lg: '18px',

xl: '24px',

},

spacing: {

xs: '0.5rem',

sm: '1rem',

md: '1.5rem',

lg: '2rem',

xl: '3rem',

},

boxShadow: {

sm: 'var(--shadow-sm)',

DEFAULT: 'var(--shadow-md)',

md: 'var(--shadow-md)',

lg: 'var(--shadow-lg)',

xl: 'var(--shadow-xl)',

},

transitionDuration: {

DEFAULT: '250ms',

},

transitionTimingFunction: {

DEFAULT: 'ease-out',

spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',

},

keyframes: {

'fade-in': {

'0%': { opacity: '0' },

'100%': { opacity: '1' },

},

'fade-out': {

'0%': { opacity: '1' },

'100%': { opacity: '0' },

},

'slide-in-up': {

'0%': { transform: 'translateY(10px)', opacity: '0' },

'100%': { transform: 'translateY(0)', opacity: '1' },

},

'slide-in-down': {

'0%': { transform: 'translateY(-10px)', opacity: '0' },

'100%': { transform: 'translateY(0)', opacity: '1' },

},

'scale-in': {

'0%': { transform: 'scale(0.95)', opacity: '0' },

'100%': { transform: 'scale(1)', opacity: '1' },

},

},

animation: {

'fade-in': 'fade-in 250ms ease-out',

'fade-out': 'fade-out 250ms ease-out',

'slide-in-up': 'slide-in-up 250ms ease-out',

'slide-in-down': 'slide-in-down 250ms ease-out',

'scale-in': 'scale-in 250ms cubic-bezier(0.34, 1.56, 0.64, 1)',

},

},

},

plugins: [

require('@tailwindcss/forms'),

require('tailwindcss-animate'),

],

}

