import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.index";
// import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-top: 50px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Body = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const RightBody = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const LeftBody = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const HIDDEN_BANNER = ["/", "/boards"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHidden = HIDDEN_BANNER.includes(router.asPath);
  return (
    <>
      <LayoutHeader />
      {isHidden && <LayoutBanner />}
      <Wrapper>
        <RightBody></RightBody>
        <Body>{props.children}</Body>
        <LeftBody></LeftBody>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
