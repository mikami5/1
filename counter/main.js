let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let clear = document.getElementById("clear")
let counter = document.getElementById("counter")

let count = 0
let y = 5
let c = 3

plus.addEventListener("click", function () {
   count = count + y
   counter.textContent = count

   if (count > 0) {
      counter.style.color = "green"
   }
})

minus.addEventListener("click", function () {
   count = count - c
   counter.textContent = count

   if (count < 0) {
      counter.style.color = "red"
   }

})

clear.addEventListener("click", function () {
   count = 0
   counter.textContent = count

   if (count == 0) {
      counter.style.color = "black  "
   }
})