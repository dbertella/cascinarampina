/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Fragment,
  MutableRefObject,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Box } from "theme-ui";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const ELEMENT_NUMBER = 10;
const patterns = [...Array(ELEMENT_NUMBER).keys()];
type PatternProps = {
  index: number;
  parentSize: {
    width: number;
    height: number;
  };
  children: (index: number) => ReactNode;
};

export const Pattern = ({ index, parentSize, children }: PatternProps) => {
  const patternSection = parentSize.width / ELEMENT_NUMBER;
  const size = getRandomInt(20, patternSection);
  const top = getRandomInt(0, parentSize.height - size);
  const left = getRandomInt(
    index * patternSection,
    index * patternSection + patternSection - size
  );
  const rotate = getRandomInt(-45, 45);
  return (
    <Box
      sx={{
        width: size,
        height: size,
        position: "absolute",
        top,
        left,
        transform: `rotate(${rotate}deg)`,
        zIndex: 0,
      }}
    >
      {children(index)}
    </Box>
  );
};

const Patterns = ({
  parentRef,
  children,
}: {
  parentRef: MutableRefObject<HTMLDivElement | null>;
  children: (index: number) => ReactNode;
}) => {
  const [parentSize, setParentSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      const size = parentRef.current?.getBoundingClientRect();
      setParentSize({
        width: size?.width ?? 300,
        height: size?.height ?? 300,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Fragment>
      {patterns.map((key) => (
        <Pattern key={key} index={key} parentSize={parentSize}>
          {children}
        </Pattern>
      ))}
    </Fragment>
  );
};

export default Patterns;
