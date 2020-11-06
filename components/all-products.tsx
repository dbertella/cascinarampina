import { Flex } from "theme-ui";
import dynamic from "next/dynamic";
import { ReactNode, useRef } from "react";
import { Carrot } from "./icons/Carrot";

const DynamicComponentWithNoSSR = dynamic(() => import("./pattern"), {
  ssr: false,
});

export function AllProducts({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Flex
      sx={{
        bg: "muted",
        py: 4,
        position: "relative",
        overflow: "hidden",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={ref}
    >
      <DynamicComponentWithNoSSR parentRef={ref}>
        {(index: number) => (
          <Carrot sx={{ fill: index === 7 ? "secondary" : "background" }} />
        )}
      </DynamicComponentWithNoSSR>

      {children}
    </Flex>
  );
}
