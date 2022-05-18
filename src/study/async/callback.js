// const result = fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => {
//         if (data.status === 'success') {
//             const img = document.createElement('img')
//             const app = document.getElementById('app')
//             app.appendChild(img)
//             img.src = data.message
//             img.style.width = '400px'
//             img.style.height = '400px'
//         }
//     })

// callback 지옥의 의미
// 코드가 보기 더러워진다는 것도 있지만 
// 콜백은 바로바로 써야한다는 단점이 있기에 콜백 헬이라고 부른다.
console.log('1')
const result = new Promise((resolve, reject) => {
    console.log('2')
    setTimeout(() => {
        const data = fetch('https://dog.ceo/api/breed/shiba/images/random')
        resolve(data)
        console.log('data', data)
    }, 2000);
    console.log('3')
})

console.log('4')
const result2 = new Promise((resolve, reject) => {
    console.log('5')
    result.then(res => {
        resolve(res.json())
        console.log('result.then', res)
    })
    console.log('6')
})

console.log('7')
result2.then(res => {
    console.log('8')
    console.log('result2', result2)
    console.log('result.then', res)
})

console.log('9')