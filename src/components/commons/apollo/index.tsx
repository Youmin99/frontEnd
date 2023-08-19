import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"; // module 요즘
import { useRecoilState } from "recoil";
import { accessTokenState } from "../store";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") ?? "");
    }
  }, []);

  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: GLOBAL_STATE,
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
