// function fetchData(callback) {
//   fetch("https://dog.ceo/api/breed/shiba/images/random")
//     .then((response) => response.json())
//     .then((json) => callback(null, json));
// }

// fetchData(function (err, result) {
//   if (err) console.log(err);
//   else console.log(result);
// });

// fetch 자체가 프로미스라 무조건 then이나 await 써야한다.

// callback 지옥의 의미
// 코드가 보기 더러워진다는 것도 있지만
// 콜백은 바로바로 써야한다는 단점이 있기에 콜백 헬이라고 부른다.

// console.log("1");
// const response = new Promise((resolve, reject) => {
//   console.log("2");
//   setTimeout(() => {
//     const data = fetch("https://dog.ceo/api/breed/shiba/images/random");
//     resolve(data);
//     console.log("data", data);
//   }, 2000);
//   console.log("3");
// });

// console.log("4");
// const result = new Promise((resolve, reject) => {
//   console.log("5");
//   response.then((res) => {
//     if (res.ok) resolve(res.json());
//     else {
//       reject(res);
//     }
//   });
//   console.log("6");
// });

// console.log("7");
// result.then((res) => {
//   console.log("8");
//   console.log("result", result);
//   console.log("result.then", res);
// });

// console.log("9");
