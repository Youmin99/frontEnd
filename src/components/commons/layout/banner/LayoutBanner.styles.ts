import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 390px;
  width: 100%;
`;

export const SliderItem = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 350px;
  margin: auto;
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: 95%;
  }
  @media screen and (max-width: 767px) {
    width: 95%;
  }
`;
