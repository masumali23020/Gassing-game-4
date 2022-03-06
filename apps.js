
// initail value 

let toalAttemps = 5;
let attempts = 0;
let toalLost = 0;
let toalWons= 0;


// finding element 
const formElement = document.querySelector("form");
const gassingNumber = formElement.querySelector("#gassingNumber");
const checkButton = formElement.querySelector("#check");
const cardbody = document.querySelector(".card__body");
const resultText = cardbody.querySelector(".resultText");
const lostWonMassage = document.createElement("p");

console.log(cardbody);
const remaingAtempt = cardbody.querySelector(".remaingAtempt");

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    attempts++;
    if(attempts > 5){
        getrenderNum.disabled = true;
        checkButton.disabled = true
    }else{
        let gassingNumbera = Number(gassingNumber.value)
        checkResult(gassingNumbera);
        remaingAtempt.innerHTML = `Remaing attempts ${toalAttemps - attempts}`

    }
    getrenderNum.value = ""
})

function checkResult(gassingNumber){
    const randomNumber = getrenderNum(5)


    if(gassingNumber == randomNumber){
        resultText.innerHTML = `you have wons`;
        toalWons++

    }else{
        resultText.innerHTML = `you have lost; random number was:${randomNumber}`;
        toalLost++
    }
    lostWonMassage.innerHTML = `Wons: ${toalWons}; Lost: ${toalLost}`;
    lostWonMassage.classList.add("large_text");
    cardbody.appendChild(lostWonMassage)

}


function getrenderNum (limit){
    return Math.floor(Math.random() * limit + 1)
}


