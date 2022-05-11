// function ConsTest() {
//     return 'constructor function'
// }

// const newCons = new ConsTest()

// console.log('newCons instanceof ConsTest', newCons instanceof ConsTest)
// console.log('newCons.constructor === ConsTest', newCons.constructor === ConsTest)
// console.log('newCons', newCons)

function CheckPosition(place) {
    this.place = place
    this.check = function () {
        // console.log('현재 위치 ' + this.place)
        console.log('현재 위치 ' + this.place)
    }
    // return place
}

const position1 = new CheckPosition('서초구')
const position2 = new CheckPosition('강남구')

position1.check()
console.log(position1.place)
position2.check()

console.log(new CheckPosition('송파구'))