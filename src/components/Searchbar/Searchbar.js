import { Formik } from 'formik';
import { FieldInput, FormLabel, Header, SearchBtn, SearchForm } from './Searchbar.styled';
import toast from 'react-hot-toast';
import { ImSearch } from "react-icons/im";

export const SearchBar = ({ onAddSearchQuery }) => {
	return (
		<Header>
			<Formik
				initialValues={{
					searchQuery: '',
				}}
				onSubmit={(value, actions) => {
					if (value.searchQuery === '') {
						toast.error('Please fill in the search field.', {
							style: {
								fontSize: '18px',
								padding: '16px',
							},
						})
					} else {
						onAddSearchQuery(value);
						actions.resetForm();
					};
				}}
			>
				<SearchForm>
					<FormLabel htmlFor="searchQuery"></FormLabel>
					<FieldInput id="searchQuery" name="searchQuery" placeholder="Search images and photos"/>
					<SearchBtn type="submit"><ImSearch/></SearchBtn>
				</SearchForm>
			</Formik>
		</Header>
	);
};