// src/components/commons/hoc/withAuth.tsx 파일
import { useEffect } from "react";
import { useRouter } from "next/router";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  // loginCheckSuccess 파일에 있는 useEffect를 가지고 오시면 됩니다.
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("need to login");
      void router.push("/로그인 페이지");
    }
  }, []);

  return <Component {...props} />;
};
