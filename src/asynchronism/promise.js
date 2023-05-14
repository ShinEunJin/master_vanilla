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
