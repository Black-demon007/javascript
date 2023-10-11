const form = document.querySelector('form')

// This value will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const weightguide = document.querySelector("#weight-guide")

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid id height : ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid id weight : ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        //show the result
        result.innerHTML = `<span> ${bmi}</span>`
        //show the weight guide
        if (bmi < 18.6) {
            weightguide.innerHTML = `underweight`
        } else if (bmi > 24.6) {
            weightguide.innerHTML = `Overweight`
        } else {
            weightguide.innerHTML = `Normalrange`
        }

    }

})