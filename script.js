const form = document.getElementById("form")
const resetButton = document.getElementById("resetButton")

const sectionOne = document.getElementById("sectionOne")
const sectionTwo = document.getElementById("sectionTwo")
const sectionThree = document.getElementById("sectionThree")


const answerOne = document.getElementById("first_answer_one")
const answerTwo = document.getElementById("first_answer_two")
const answerThree = document.getElementById("second_answer_three")



form.addEventListener("submit", e =>{
    e.preventDefault()
    checkAnswer(answerOne, sectionOne)
    checkAnswer(answerTwo, sectionTwo)
    checkAnswer(answerThree, sectionThree)
})

resetButton.addEventListener("click", resetColor)

function checkAnswer(answer,section){
    if(answer.checked){
        section.style.color = "green"
    }else{
        section.style.color = "red"
    }
}

function resetColor(){
    sectionOne.style.color = "black"
    sectionTwo.style.color = "black"
    sectionThree.style.color = "black"
}