import styled from "styled-components";

export const GalleryImage = styled.img`
width: 100%;
height: 300px;
	object-fit:cover;
`;

export const GalleryItemWrap = styled.div`
cursor: zoom-in;
 transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1);
		&:hover,
		&:focus{
			scale: 1.04;
		}
`;