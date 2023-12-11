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
    width: 95%;
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
export const MeunWrapper = styled.div``;

export const DWrapper = styled.div`
  background-color: orange;
  border-radius: 15px;
  margin-left: 50px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;
export const InnerButton = styled.div`
  margin: 10px;
  color: black;
  cursor: pointer;
`;

export const LoginBtn = styled.div`
  width: 70px;
  height: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  margin: 10px;
  color: black;
  cursor: pointer;
  font-size: 13px;
`;

export const RegisterBtn = styled.div`
  width: 70px;
  background-color: black;
  height: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  margin: 10px;
  color: white;
  cursor: pointer;
  font-size: 13px;
`;

export const MenuBar = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.div`
  color: black;
  cursor: pointer;
  margin: 20px;
`;

export const MenuItems = styled.div`
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    margin-bottom: 0px;
  }

  :hover {
    color: orange;
  }
`;
