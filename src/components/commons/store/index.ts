import { atom } from "recoil";

export const trueState = atom({
  key: "trueState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPage",
  default: "",
});
