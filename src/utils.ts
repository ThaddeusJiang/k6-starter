import { sleep } from "k6";
import http from "k6/http";
// @ts-ignore
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
import { apiLogin } from "./consts/commonApis";

export type AuthHeaders = {
  headers: {
    Cookie: string;
    "X-CSRF-TOKEN": string;
  };
};

export const login = (account: unknown): AuthHeaders => {
  let res = http.post(apiLogin, JSON.stringify(account));
  sleep(1);

  return {
    headers: {
      Cookie: res.headers["Set-Cookie"],
      "X-CSRF-TOKEN": res.json("sessionInfo.csrfToken") as string,
    },
  };
};

export const randomSleep = () => {
  sleep(randomIntBetween(1, 10));
};
