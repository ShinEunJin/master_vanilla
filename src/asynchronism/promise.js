// const TEST_URL = "https://dog.ceo/api/breeds/image/random";

// const lodashSrc =
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js";

// const loadScript = (src, callback) => {
//   const script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(script);

//   document.head.append(script);
// };
// loadScript(
//   lodashSrc,
//   (script) => {
//     console.log(`${script.src}가 로드되었습니다.`);
//   }
// );

// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`load ${src} fail.`));

//     document.head.append(script);
//   });
// };

// const promise = loadScript(lodashSrc);

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const photo = new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", TEST_URL);
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       resolve(data);
//     } else {
//       reject(new Error("error"));
//     }
//   };
//   xhr.send();
// });

// const photo = fetch(TEST_URL).then((res) => res.json());

// photo.then((res) => {
//   const img = document.createElement("img");
//   img.src = res.message;
//   img.style.maxWidth = "500px";

//   document.body.append(img);
// });

// ===== 정리 =====

// new Promise((resolve, reject) => {...})

// 프로미스의 콜백안에서 resolve나 reject를 호출하면 바로 작업 마무리.

// (resolve는 fulfilled, reject는 rejected 상태로 처리)

// 이후 then(또는 catch 또는 finally)을 사용하여

// resolve(값)의 인자('값')가 then의 매개변수가 된다.

// const promise = new Promise((resolve, reject) => {
//     ...
//     resolve(값)
// })

// promise.then(res (= 값) => res를 활용할 수 있는 코드)
