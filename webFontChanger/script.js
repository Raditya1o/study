
const p = document.querySelector(".changeP")

function getChangeToInter () {
    document.body.classList.toggle("bg-Inter")
    p.style.color = "red"
}
function getChangeToPoppins () {
    document.body.classList.toggle("bg-Poppins")
    p.style.color = "brown"
}
function getChangeToMontserrat() {
    document.body.classList.toggle("bg-Montserrat")
    p.style.color = "violet"
}
function getChangeToOpenSans () {
    document.body.classList.toggle("bg-OpenSans")
    p.style.color = "blue"
}

//function getReset() {
   // document.body.remove(getChangeToInter)
    //document.body.remove(getChangeToMontserrat)
    //document.body.remove(getChangeToPoppins)
    //document.body.remove(getChangeToM)
//}