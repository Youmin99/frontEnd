import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 750px;
  margin: 0px 0px 100px;

  @media screen and (max-width: 1024px) {
    width: 600px;
    margin: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 350px;
    margin: 20px;
  }
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding: 80px 70px 70px 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 700px;
  @media screen and (max-width: 1024px) {
    min-height: 500px;
  }
  @media screen and (max-width: 767px) {
    min-height: 300px;
  }
`;

export const Title = styled.h1`
  padding-top: 40px;
  padding-left: 20px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-left: 20px;
  padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;
  border-radius: 30px;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const IconHeadWrapper = styled.div`
  text-align: center;
  display: flex;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeWrapper = styled.div`
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LocationIcon = styled.img``;

export const LikeIcon = styled.div`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;

export const Icon = styled.div`
  font-size: 24px;
  color: #828282;
  margin: 0px 10px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #828282;
`;
