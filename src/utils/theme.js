const theme = () => ({
  palette: {
    mode: "light",
    primary: {
      main: "#FFF500"
    },
    secondary: {
      main: "#474E00"
    },
    tertiary: {
      main: "#495500"
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
      calendar: "#ffffff",
      content: "#2F3300",
      aboutTitle: "#9F8600",
      sidebar: "#333333"
    },
    background: {
      default: "#FDFFE9",
      defaultLinear: "linear-gradient(90deg, #FEFFF3 0%, #FCFFD9 100%)",
      defaultRadial: "radial-gradient(#FEFFF3, #FCFFDA)",
      footer: "#E0E783",
      about: "#FFFDD9",
      title: "#E8E097",
      sidebar: "rgba(99, 96, 96, 0.8)",
      tableHeader: "#E8E097"
    },
    action: {
      active: "#000000"
    },
    warning: {
      main: "#821515"
    }
  },
  typography: {
    fontFamily: "Tw Cen MT",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024
    }
  }
});

export default theme;
