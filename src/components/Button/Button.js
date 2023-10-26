import { BtnLoadMore } from "./Button.styled"

export const ButtonLoadMore = ({onLoadMore}) => {
	return (
		<BtnLoadMore type="button" onClick={()=>onLoadMore()}>Load more</BtnLoadMore>
	)
}