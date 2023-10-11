const user = {
    username: "omkar",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let userName = "omkar"
//     console.log(this.userName)
// }

// chai()

// const chai = function () {
//     let userName = "omkar"
//     console.log(this.userName)
// }

const chai = () => {
    let userName = "omkar"
    console.log(this)
}





// chai()

//Explicit
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => num1 + num2

//Implicit
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ userName: "omkar" })

console.log(addTwo(3, 4))


// const myArray = [2,5,3,7,8]

// myArray.forEach(()=>())



