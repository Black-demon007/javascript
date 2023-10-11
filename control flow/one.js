// if statement


const isUserLoggedIn = true

const temperature = 24

// if (temperature === 24) {
//     console.log("less than 50")
// } else {
//     console.log("temperature is not less than 50")
// }




// <, >, <=, >=, ==, !=, === , !==

// const score = 200

// if (score > 100) {
//     let power = 'fly'
//     console.log(`user power : ${power}`)
// }

// console.log(`user power : ${power}`)

// const balance = 4

//implicit scope
// if (balance >= 3) console.log('test'),
//     console.log("test2");

// if (balance < 3) {
//     console.log("less than");
// } else if (balance < 2) {
//     console.log("less than 2");
// } else if (balance < 1) {
//     console.log("less than 1");
// } else {
//     console.log("less than 5 ");
// }


const userLoggedIn = true
const debitCrad = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCrad && 2 == 3) {
    console.log("Allow to buy course")

}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in ")
}
