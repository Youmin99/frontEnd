import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HIDDEN_BANNER = ["/boards/new"];

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHidden = HIDDEN_BANNER.includes(router.asPath);
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation isfront={true} />
      {!isHidden && <LayoutBanner />}
      <Body>{props.children}</Body>
      <LayoutFooter />
    </>
  );
}
