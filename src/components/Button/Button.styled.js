import styled from "styled-components";

export const BtnLoadMore = styled.button`
display: block;
	margin-top: 50px;
	margin-left: auto;
	margin-right: auto;
padding: 10px 24px;
	font-family: inherit;
	font-weight: 500;
	line-height: 1.5;
	letter-spacing: 0.04em;
	color: #ffffff;
	background-color: #3700ff;
	border: 1px solid#3700ff;
	border-radius: 4px;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

		&:hover{
			color: #000000;
				background-color: #9adfff;
				border: 1px solid transparent;
				box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
					0px 2px 2px rgba(0, 0, 0, 0.12);
				cursor: pointer;
		}
`;