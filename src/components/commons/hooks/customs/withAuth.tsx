// src/components/commons/hooks/useAuth.tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = (): void => {
  const router = useRouter();
  // useEffect 훅스를 사용하고 있기 때문에 커스텀 훅스입니다.
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("after login!");
      void router.push("/boards");
    }
  }, []);
};
