import { Modal } from "components/Modal/Modal";
import { GalleryImage, GalleryItemWrap } from "./ImageGalleryItem.styled";
import { useState } from "react";


export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<GalleryItemWrap onClick={openModal}>
				<GalleryImage src={webformatURL} alt={tags} />
			</GalleryItemWrap>
			<Modal
				modalIsOpen={isModalOpen}
				onCloseModal={closeModal}
				largeImageURL={largeImageURL}
				tags={tags} />
		</>
	);
};