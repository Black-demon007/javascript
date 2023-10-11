//Immediately Invoked Function Expression (IIFE)

//named IFFE
(function chai() {
    console.log('DB Connected')
})();

((name) => {
    console.log(` ${name}`)
})("omkar")
