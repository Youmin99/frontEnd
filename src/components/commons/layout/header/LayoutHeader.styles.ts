import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1024px) {
    padding: 0px 30px 0px 30px;
  }
  @media screen and (max-width: 767px) {
    padding: 0px 30px 0px 30px;
  }
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: black;
  cursor: pointer;
`;

export const InnerButton = styled.div`
  margin: 10px;
  color: black;
  cursor: pointer;
`;
