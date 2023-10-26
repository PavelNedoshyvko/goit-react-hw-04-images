import styled from "styled-components";


export const Gallery = styled.ul`
display: flex;
	flex-wrap: wrap;
  gap: 30px;
	width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  margin-left: auto;
  margin-right: auto;
	margin-bottom: 50px;
`;

export const GalleryItem = styled.li`
width: calc((100% - 30px * 3) / 4);
`;




