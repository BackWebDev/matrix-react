import styled from "styled-components";

export const WrapStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const RowStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const ItemStyled = styled.div`
	width: ${props => (window.innerWidth / props.size)}px;
	height: ${props => (window.innerWidth / props.size)}px;
	background-color: beige;
	border: 1px solid black;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ItemNumber = styled.span`
	font-size: 1em;
`;