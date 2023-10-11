//singleton

//const tinderUser = new Object()

const tinderUser = {

}

tinderUser.id = "123abc"
tinderUser.name = "omkar"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "omkarraj281001@gmail.com",
    fullname: {
        userfullname: {
            firstname: "omkar",
            lastname: "Raj"
        }

    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }
//console.log(obj3)


const User = [
    {
        id: 1,
        email: "h@gmai.com"
    },
    {
        id: 2,
        email: "o@gmai.com"
    },

]

User[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//finding values
console.log(tinderUser.hasOwnProperty('isLogged'));

//de-structure the object

const course = {
    coursename: "js in hindi",
    courseprice: "999",
    courseTeacher: "Hitesh"
}

//course.courseTeacher
const { courseTeacher: teacher } = course

console.log(teacher);


// const navbar = ({company}) => {

// }

// navbar(company = 'omkar')

//API Baisc
// {
//     "name": "omkar",
//     "coursename": "js in hindi",
//     "courseprice": "999"
// }
// [
//     {},
//     {},
//     {},
// ]

