import { Grid, Box, Heading } from "theme-ui";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ProductListItem } from "lib";
import { ProductPreview } from "./product-preview";
import { VeggieBox } from "../icons/VeggieBox";

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
      sx={{
        bg: "muted",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
      ref={ref}
    >
      <AnyComponent parentRef={ref}>
        {(index: number) => (
          <VeggieBox sx={{ fill: index === 7 ? "secondary" : "background" }} />
        )}
      </AnyComponent>

      <Box
        as="section"
        variant="styles.container"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Heading as="h2" sx={{ mb: 3 }}>
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
