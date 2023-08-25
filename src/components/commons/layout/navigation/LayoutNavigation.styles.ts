import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-left: 150px;
  height: 200px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  width: 120px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px gray;
  @media screen and (max-width: 1024px) {
    padding: 0px 100px 0px 100px;
    margin-left: 0px;
    width: 90%;
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MenuItem = styled.div`
  margin-bottom: 25px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    margin-bottom: 0px;
  }

  :hover {
    color: orange;
  }
`;
