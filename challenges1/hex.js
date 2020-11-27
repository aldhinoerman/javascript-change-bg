const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector('button');
const body = document.querySelector('body');
const span = document.getElementById('span1');

//Instructions
// 1. declare btn(id) and color(class) object by using dom syntax (getElementById and querySelector)
// 2. setup addEventListener on clicked btn object
// 3. declare the hexColor with # + 6 random number from hex array variable by using for loop function
// 4. create function getRandomNumber() by Math function to get random number of hex variable (length is considerable)
// there is a clue (by using math JS function)

button.addEventListener('click', changeHex);

function changeHex(){
    let hexValues = '#'

    for (let i = 0; i < 6; i++){
        const index = Math.floor(Math.random()*hex.length)
        hexValues += hex[index]
    }
    span.innerHTML = hexValues
    body.style.backgroundColor = hexValues
}