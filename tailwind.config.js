/** @type {import('tailwindcss').Config} */
export default {
  content: ["../index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "4xs": "320px",
      "3xs": "375px",
      "2xs": "425",
      xs: "480px",
      lmf: "500px",
      lt: "900px",
      xm: "600px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      boxShadow: {
        "shade-primery": "0 0 13px 1px rgba(70, 72, 77, 0.08)",
      },
      fontFamily: {
        IRANSans: "IRANSans",
        IRANSansBlack: "IRANSans Black",
        IRANSansBold: "IRANSans Bold",
        IRANSansLight: "IRANSans Light",
        IRANSansMedium: "IRANSans Medium",
      },
      colors: {
        dark: {
          primery: "#464749",
        },
        green: {
          primery: "#2bce56",
        },
        gray: {
          primery: "#f0f2f7",
        },
      },

      container: {
        center: true,
        padding: { DEFAULT: "1rem", lg: "0.625rem" },
      },
      borderRadius: {
        "4xl": "32px",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
