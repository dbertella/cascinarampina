import { ImageGallery, ReactImageGalleryItem } from "components/ImageGallery";
import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib/api";
import { FC } from "react";
import { MediaImage } from "types";

const DefaultPage: FC<
  PageProps & { gallery: ReactImageGalleryItem[] | null }
> = ({ gallery, data }) => (
  <Page data={data}>{gallery && <ImageGallery gallery={gallery} />}</Page>
);

export default DefaultPage;

export async function getStaticProps() {
  const data = await getPageByUri("cosa-facciamo/alleviamo");
  console.info("alleviamo done");
  return {
    props: {
      data,
      gallery:
        data.page.pageElements?.pageGallery?.map(
          ({ image }: { image: MediaImage & { thumb: string } }) => ({
            original: image.sourceUrl,
            thumbnail: image.thumb,
          })
        ) ?? null,
    },
  };
}
