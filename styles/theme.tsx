export default {
  breakpoints: ["30em", "48em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '"Asap", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Asap", sans-serif',
    monospace: "Menlo, monospace",
    cascinarampina: "Cascinarampina, cursive",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#464E47",
    background: "#fafafa",
    primary: "#95c11fff",
    secondary: "#114810ff",
    muted: "#e6e6f0ff",
    textTransparent: "#464E4711",
    backgroundTransparent: "#fafafaaa",
    primaryTransparent: "#95c11f33",
    secondaryTransparent: "#11481087",
    mutedTransparent: "#e6e6f0aa",
    darkGrey: "#787878",
    lightGrey: "#ababab",
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 4,
      bg: "backgroundTransparent",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "text",
      bg: "backgroundTransparent",
      textTransform: "uppercase",
      p: 3,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "text",
      "&:focus, &:active": {
        outline: "1px solid",
        outlineColor: "primary",
      },
      "&:hover": {
        bg: "textTransparent",
      },
    },
    outline: {
      color: "text",
      bg: "transparent",
      px: 2,
      py: 1,
      border: "1px solid",
      borderColor: "text",
      "&:hover": {
        color: "background",
        bg: "text",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      bg: "background",
      overflowX: "hidden",
    },
    container: {
      maxWidth: 1200,
      my: 2,
      mx: "auto",
      px: [3, 4],
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
      width: "auto",
      height: "auto",
    },
    audio: {
      width: "100%",
    },
    blockquote: {
      fontSize: [2, null, 3],
      position: "relative",
      mx: 0,
      px: 4,
      "&:before": {
        content: "url(/icons/check.svg)",
        width: 20,
        height: 20,
        position: "absolute",
        left: 0,
        top: "2px",
      },
    },
  },
};
