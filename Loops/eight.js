const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, cv) {
//     console.log(`acc: ${acc} and cv: ${cv}`);
//     return acc + cv
// }, 0)

const myTotal = myNums.reduce((acc, cv) => acc + cv, 0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "jscourse",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "Mobiledev",
        price: 1999
    },
    {
        itemName: "DataScience",
        price: 2999
    },
]

const pricetoPay = shoppingCart.reduce((acc, item) => item.price + acc, 0)
console.log(pricetoPay)