import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalWrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: black;
	opacity: 0.7;
`;

export const Modal  = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	top: 100px;
	width: 500px;
	height: 500px;
	border: 1px solid black;
	border-radius: 20px;
	opacity: 1;
`;

export const Title  = styled.div`
`;