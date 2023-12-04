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
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HIDDEN_BANNER = ["/"];

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHidden = HIDDEN_BANNER.includes(router.asPath);
  return (
    <>
      <LayoutHeader />
      {!isHidden && <LayoutBanner />}
      <Wrapper>
        <Body>{props.children}</Body>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
