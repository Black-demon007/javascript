//singleton

//object literals 

const mySym = Symbol("key1");

const jsUser = {
    name: "Omkar",
    "fullname": "Omkar raj",
    [mySym]: "mykey1",
    age: 23,
    location: "Pune",
    email: "omkarraj281001@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["fullname"])
console.log(jsUser[mySym])

//change the value
jsUser.email = "omkarraj@chatgpt.com"
//lock the value
//Object.freeze(jsUser)
jsUser.email = "omkarraj@microsoft.com"
// console.log(jsUser)


jsUser.greeting = function () {
    console.log("hello js user")

}

jsUser.greeting2 = function () {
    console.log(`hello js user, ${this.name}`)

}

console.log(jsUser.greeting)

console.log(jsUser.greeting())
console.log(jsUser.greeting2())