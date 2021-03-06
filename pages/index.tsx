import { HomeBlock } from "components/HomeBlock";
import { Page, PageProps } from "components/page";
import { getHomePage } from "lib";
import { FC } from "react";
import { MediaImage } from "types";
import { ReactImageGalleryItem } from "components/ImageGallery";

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

const Home: FC<PageProps & HomeProps> = ({ blocks, ...rest }) => (
  <Page home {...rest}>
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
