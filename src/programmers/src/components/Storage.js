export const setLocalStorage = (key, data) => {
  // 원래는 비동기
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
};
