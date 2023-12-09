import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  padding: 60px;
  margin-bottom: 100px;
  box-shadow: 0px 0px 10px gray;
  border-radius: 30px;

  @media screen and (max-width: 1124px) {
    width: 700px;
    padding: 50px;
  }
  @media screen and (max-width: 767px) {
    width: 350px;
    padding: 30px;
  }
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: orange;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 15%;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 15%px;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 55%;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 25%;
  }
`;

export const ColumnBasic = styled.div`
  width: 15%;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 25%;
  }
`;
export const Columntime = styled.div`
  width: 15%;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 30%;
  }
`;

export const ColumnTitle = styled.div`
  width: 55%;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 25%;
  }

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;
