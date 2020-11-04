/** @jsxRuntime classic */
/** @jsx jsx */
import theme from "styles/theme";
import { jsx } from "theme-ui";

const sx = {
  ...theme.styles,
  ".aligncenter": {
    textAlign: "center",
  },
  ".wp-block-gallery": {
    m: 0,
    ul: {
      display: "flex",
      flexWrap: "wrap",
      listStyleType: "none",
      p: 0,
      my: 4,
      mx: 0,
    },
    li: {
      flex: "1 1 33%",
    },
    img: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      verticalAlign: "bottom",
    },
    figure: {
      m: 1,
      height: "300px",
      position: "relative",
    },
    figcaption: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      p: 1,
      fontSize: 0,
      bg: "mutedTransparent",
    },
    "@media screen and (max-width: 48em)": {
      li: {
        flex: "1 1 50%",
      },
    },
    "@media (max-width: 30em)": {
      ul: {
        display: "block",
      },
      figure: {
        height: "auto",
      },
      li: {
        flex: "1 1 100%",
      },
    },
  },
};

type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return <div sx={sx} dangerouslySetInnerHTML={{ __html: content }} />;
}
