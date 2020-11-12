import { HomeBlock } from "components/HomeBlock";
import { Page, PageProps } from "components/page";
import { getHomePage } from "lib";
import { FC } from "react";
import { Box } from "theme-ui";
import { MediaImage } from "types";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import theme from "styles/theme";

type HomeBlock = {
  image: MediaImage;
  text: string;
  url: string;
  ctaText?: string;
};

type HomeProps = {
  blocks: HomeBlock[];
  gallery: ReactImageGalleryItem[];
};

const Home: FC<PageProps & HomeProps> = ({ blocks, gallery, ...rest }) => (
  <Page headerSize={[400, null, 600]} {...rest}>
    <Box my={5}>
      {blocks.map(({ image, text, url, ctaText }, index) => (
        <HomeBlock
          key={url}
          href={url}
          image={image}
          content={text}
          ctaText={ctaText}
          even={index % 2 === 0}
        />
      ))}
    </Box>
    <Box
      my={5}
      sx={{
        ".image-gallery-icon": {
          [`@media (min-width: ${theme.breakpoints[2]})`]: {
            "&:hover": {
              color: "primary",
            },
          },
          "&:focus": {
            outlineColor: "primary",
          },
        },
      }}
    >
      <ImageGallery items={gallery} showPlayButton={false} />
    </Box>
  </Page>
);

export default Home;

export async function getStaticProps() {
  const data = await getHomePage();
  console.info("homepage done");
  return {
    props: {
      data,
      blocks: data.page.homeElements.homeSlide,
      gallery: data.page.homeElements.homeGallery.map(
        ({ image }: { image: MediaImage & { thumb: string } }) => ({
          original: image.sourceUrl,
          thumbnail: image.thumb,
          srcSet: image.srcSet,
        })
      ),
    },
  };
}
