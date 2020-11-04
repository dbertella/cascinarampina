import { Grid, Box, Heading } from "theme-ui";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ProductListItem } from "lib/types";
import { ProductPreview } from "./product-preview";
import { VeggieBox } from "../icons/VeggieBox";

const DynamicComponentWithNoSSR = dynamic(() => import("../pattern"), {
  ssr: false,
});

export function MoreProducts({
  products,
}: {
  products: { node: ProductListItem }[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Box
      sx={{
        bg: "muted",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
      ref={ref}
    >
      <DynamicComponentWithNoSSR parentRef={ref}>
        {(index: number) => (
          <VeggieBox sx={{ fill: index === 7 ? "secondary" : "background" }} />
        )}
      </DynamicComponentWithNoSSR>

      <Box
        as="section"
        variant="styles.container"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Heading as="h2" sx={{ mb: 3 }}>
          Ti proponiamo anche
        </Heading>
        <Grid columns={["1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr  1fr 1fr"]} gap={2}>
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
