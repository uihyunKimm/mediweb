  /** @type {import('tailwindcss').Config} */
  module.exports = {
	// Tailwind의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가합니다.
	// src경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성 해줍니다.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xsm': '380px',
      // => @media (min-width: 380px) { ... }

      'ssm': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend:{
      width:{
        "110%":"110%"
      },
      height:{
        "110%":"110%"
      },
      colors:{
        'primary':'#3ec890'
      },
      keyframes:{
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-55%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
        flowtext:{
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        },
        animation:{
          'spin-slow': 'spin 3s linear infinite',
          'flowtext': 'flowtext 12s linear infinite',
          'timer': '--progress stroke-dasharray: 125.6 stroke-dashoffset: calc(125.6px * (1 - var(--progress)))'        
        },
      },
    },
  plugins: [],
}