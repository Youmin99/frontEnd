import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 550px;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 250px;
  }
`;

export const SliderItem = styled.img`
  position: relative;
  z-index: 1;
  width: 73%;
  height: 500px;
  margin: auto;
  border-radius: 20px;

  box-shadow: 0px 0px 10px gray;
  @media screen and (max-width: 1024px) {
    width: 95%;
  }
  @media screen and (max-width: 767px) {
    width: 95%;
    height: 250px;
  }
`;
