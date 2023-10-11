// //arrays

// const myArr = [1, 2, 3, 4, 5];
// const myHeros = ["shaktiman", "Nagraj"]
// const myArr2 = new Array(1, 2, 3, 4)

// // console.log(myArr[1])

// //arr method
// // myArr.push(6)
// // myArr.push(7)
// // console.log(myArr)
// // myArr.pop()
// // console.log(myArr)

// // myArr.unshift(9)
// // myArr.shift()


// // console.log(myArr.includes(9))
// // console.log(myArr.indexOf(3))

// // const newArr = myArr.join()
// // console.log(myArr)
// // console.log(newArr)

// // console.log(typeof newArr)

// //slice, splice

// console.log("A", myArr);


// const myN1 = myArr.slice(1, 3);

// console.log(myN1)
// console.log("B", myArr)

// const myN2 = myArr.splice(1, 3);
// console.log("C", myArr)
// console.log(myN2);


const marvel_Heros = ['thor', "Ironman", "Spiderman"]
const dc_Heros = ['superman', "Batman", "Flash"]

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros)
// console.log(marvel_Heros)

// const all_heros = marvel_Heros.concat(dc_Heros)
// console.log(all_heros)

const all_newHeros = [...marvel_Heros, ...dc_Heros]
// console.log(all_newHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)



console.log(Array.isArray('omkar'))
console.log(Array.from('omkar'))

console.log(Array.from({ name: "omkar" })); //intersting case



