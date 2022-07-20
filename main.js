let counter = document.querySelector(".counter")
let decrease = document.querySelector(".decrease")
let increase = document.querySelector(".increase")
let reset = document.querySelector(".reset")

let counterIndex = 0

increase.addEventListener("click", function () {
  counterIndex++
  counter.textContent = counterIndex
  changeColor()
})

decrease.addEventListener("click", function () {
  counterIndex--
  counter.textContent = counterIndex
  changeColor()
})

reset.addEventListener("click", function () {
  counterIndex = 0
  counter.textContent = counterIndex
  changeColor()
})

function changeColor() {
  if (counterIndex > 0) {
    counter.style.color = "green"
  } else if (counterIndex < 0) {
    counter.style.color = "red"
  } else {
    counter.style.color = "black"
  }
}
