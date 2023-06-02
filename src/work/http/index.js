import api from "./api.js";

//https://dog.ceo/api/breeds/image/random

export const httpRequest = async () => {
  const result = await api({
    method: "get",
    url: "http://test.buddy-coin.com/api/v5/kiosks/kioskLocationCnt",
  });
  console.log("result", result);
};
