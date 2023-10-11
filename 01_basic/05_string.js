const name = "omkar raj"
const repoCount = 50

//console.log(name + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('omkar-raj')

console.log(gameName[0]);
console.log(gameName.__proto__)


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'))

const newStrin = gameName.substring(0, 4)
console.log(newStrin);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStrin1 = "      hitesh     "
console.log(newStrin1)
console.log(newStrin1.trim())

const url = "https://omkar.com/omkar%20raj"

console.log(url.replace('%20', '-'))

console.log(url.includes('omkar'))

console.log(gameName.split('-'))        