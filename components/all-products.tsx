import { Flex } from "./ui";
import dynamic from "next/dynamic";
import { ReactNode, useRef } from "react";
import { Carrot } from "./icons/Carrot";
import styles from "./all-products.module.css";

const DynamicComponentWithNoSSR = dynamic(() => import("./pattern"), {
  ssr: false,
});

export function AllProducts({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const AnyComponent = DynamicComponentWithNoSSR as any;
  return (
    <Flex
      className={styles.container}
      ref={ref}
    >
      <AnyComponent parentRef={ref}>
        {(index: number) => (
          <Carrot className={index === 7 ? styles.iconActive : styles.icon} />
        )}
      </AnyComponent>

      {children}
    </Flex>
  );
}
