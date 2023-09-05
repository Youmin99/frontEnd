// src/components/commons/hooks/useAuth.tsx
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccesseTokenLoadable } from "../../store";

export const useAuth = (): void => {
  const router = useRouter();

  useEffect(() => {
    const AccesseToken = useRecoilValueLoadable(restoreAccesseTokenLoadable);

    void AccesseToken.toPromise().then((newAccesseToken) => {
      if (newAccesseToken === undefined) {
        alert("after login!");
        void router.push("/boards");
      }
    });
  }, []);
};
