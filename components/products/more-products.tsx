import { Grid, Box, Heading } from "components/ui";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ProductListItem } from "lib";
import { ProductPreview } from "./product-preview";
import { VeggieBox } from "../icons/VeggieBox";
import styles from "./more-products.module.css";

const DynamicComponentWithNoSSR = dynamic(() => import("../pattern"), {
  ssr: false,
});

export function MoreProducts({
  products,
  title,
}: {
  products: { node: ProductListItem }[];
  title?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const AnyComponent = DynamicComponentWithNoSSR as any;
  return (
    <Box
      className={styles.container}
      ref={ref}
    >
      <AnyComponent parentRef={ref}>
        {(index: number) => (
          <VeggieBox className={index === 7 ? styles.iconActive : styles.icon} />
        )}
      </AnyComponent>

      <Box
        as="section"
        variant="styles.container"
        className={styles.section}
      >
        <Heading as="h2" className={styles.heading}>
          {title}
        </Heading>
        <Grid
          columns={["auto", "1fr 1fr", "1fr 1fr 1fr  1fr 1fr"]}
          gap={3}
        >
          {products.map(({ node }) => (
            <ProductPreview
              key={node.slug}
              title={node.name}
              coverImage={node.image}
              price={node.price}
              slug={node.slug}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
