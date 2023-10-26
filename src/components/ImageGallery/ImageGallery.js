import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery, GalleryItem } from "./ImageGallery.styled";

export const ImageGallery = ({ gallery }) => {
	return (
	
		<Gallery>
			{gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
				<GalleryItem key={id}>
					<ImageGalleryItem
						webformatURL={webformatURL}
						largeImageURL={largeImageURL}
						tags={tags} />
				</GalleryItem>
			))}
		</Gallery>
	);
};