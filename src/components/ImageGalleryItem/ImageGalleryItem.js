import { Modal } from "components/Modal/Modal";
import { GalleryImage, GalleryItemWrap } from "./ImageGalleryItem.styled";
import { Component } from "react";


export class ImageGalleryItem extends Component{

	state = {
		isModalOpen: false,
	};

	openModal = () => {
		this.setState({ isModalOpen: true })
	};

	closeModal = () => {
		this.setState({ isModalOpen: false })
	};

	render() {
		const { webformatURL, largeImageURL, tags } = this.props;
		return (
			<>
				<GalleryItemWrap onClick={this.openModal}>
					<GalleryImage src={webformatURL} alt={tags} />
				</GalleryItemWrap>
				<Modal
					modalIsOpen={this.state.isModalOpen}
					onCloseModal={this.closeModal}
					largeImageURL={largeImageURL}
					tags={tags} />
			</>
		);
	};
};