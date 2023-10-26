import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export const fetchImages = async (searchQuery, page = 1) => {
	const params = new URLSearchParams({
		key: "39153918-79b1c310c5699b06879eeb38b",
		q: searchQuery,
		image_type: "photo",
		orientation: "horizontal",
		safesearch: true,
		page,
		per_page: 12,
	});
	const response = await axios.get(`?${params}`);
	return response.data;
};