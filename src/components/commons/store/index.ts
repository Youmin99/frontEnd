import { atom } from "recoil";

export const trueState = atom({
  key: "trueState", // state의 이름
  default: false, // 초기값
});

export const accessTokenState = atom({
  key: "accessTokenState", // state의 이름
  default: "", // 초기값
});
