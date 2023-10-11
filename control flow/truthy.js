const UserEmail = [];

//truthy value :- maan lete hai ki value true hai 
if (UserEmail) {
    console.log("got user email")
} else {
    console.log("don't have user email")
}
//checking the array is empty
if (UserEmail.length === 0) {
    console.log("array is empty");
}

//checking the object is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

// val1 = null ?? 10 ?? 15

// val1 = null ?? undefined
// val1 = undefined ?? null







console.log(val1);

// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");