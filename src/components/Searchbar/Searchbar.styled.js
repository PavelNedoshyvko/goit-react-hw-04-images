import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const SearchForm = styled(Form)`
position: relative;

`;

export const Header = styled.div`
position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 55px;
	background-color: #00aeff;
	z-index: 1;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.01em;
`;

export const FieldInput = styled(Field)`
width: 300px;
 /* margin-right: 30px; */
	min-height: 35px;
	padding-left: 15px;
	border: 1px solid rgba(46, 47, 66, 0.4);
	border-radius: 4px;
	outline: transparent;
	transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		border-color: #4d5ae5;
		}
`;

export const SearchBtn = styled.button`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 50%;
transform: translateY(-50%);
right: 10px;
padding: 4px 15px;
	border: 1px solid transparent;
	border-radius: 4px;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)
	;

	&:hover{
			color: #000000;
				background-color: #9adfff;
				border: 1px solid transparent;
				cursor: pointer;
		}
`;

export const ErrMessage = styled(ErrorMessage)`
margin-bottom: 20px;
`;