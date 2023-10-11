


function sayMyNamne() {
    console.log("O");
    console.log("M");
    console.log("K");
    console.log("A");
    console.log("R");
}

// sayMyNamne()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);

// }

function addTwoNumber(number1, number2) {

    // let result = number1 + number2;

    // return result;

    return number1 + number2;


}
const result = addTwoNumber(3, 5)

// console.log("Result", result)

function logInUserMessage(username = "sam") {
    if (!username) {
        console.log("please enter a user name")
        return;

    }
    return `${username} just logged-in`
}

// console.log(logInUserMessage("Omkar"))
//console.log(logInUserMessage("omkar"))

function CalculateCartPrice(val1, val2, ...num1) {
    return num1

}
// console.log(CalculateCartPrice(200, 400, 500))

const user = {
    username: "omkar",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {

    return getArray[2]

}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 100, 600]))