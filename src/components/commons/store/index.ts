import { atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export const openState = atom({
  key: "openState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

export const restoreAccesseTokenLoadable = selector({
  key: "restoreAccesseTokenLoadable",
  get: async () => {
    const newAccesseToken = await getAccessToken();
    return newAccesseToken;
  },
});
