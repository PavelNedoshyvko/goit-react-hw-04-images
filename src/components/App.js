import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from "api";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ButtonLoadMore } from "./Button/Button";
import { Loader } from "./Loader/Loader";


export const App = () => {

	const [images, setImages] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [page, setPage] = useState(1);
	const [totalImages, setTotalImages] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (searchQuery === '') {
			return;
		};
		async function getImages() {
			try {
				setLoading(true);
				setError(false);
				const { totalHits, hits } = await fetchImages(searchQuery, page);
				setImages(prevState => [...prevState, ...hits]);
				setTotalImages(totalHits);

				if (Math.ceil(totalHits / 12) === page) {
					toast.success("We're sorry, but you've reached the end of search results.",
						{
							style: {
								fontSize: '18px',
								padding: '16px',
								position: 'center-center',
							},
						})
				};

				if (hits.length === 0) {
					toast.success("Sorry, there are no images matching your search query. Please try again.",
						{
							style: {
								fontSize: '18px',
								padding: '16px',
								position: 'center-center',
							},
						})
				};
			} catch (err) {
				setError(true);
				console.log(err);
			} finally {
				setLoading(false);
			};
		};

		getImages();

	}, [searchQuery, page, error]);

	const addSearchQuery = (value) => {
		setSearchQuery(value.searchQuery.trim());
		if (searchQuery !== value.searchQuery.trim()) {
			setImages([]);
			setPage(1);
		};
	};

	const loadMore = () => {
		setPage(prevState => prevState + 1);
	};

	const renderBtnLoadMore = (Math.ceil(totalImages / 12) !== page);

	return (
		<>
			<SearchBar onAddSearchQuery={addSearchQuery} />
			{images.length > 0 && <ImageGallery gallery={images} />}
			{images.length > 0 && renderBtnLoadMore && <ButtonLoadMore onLoadMore={loadMore} />}
			{loading && <Loader loading={loading} />}
			<Toaster />
		</>
	);
};