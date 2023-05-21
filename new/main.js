let name = prompt('Привет как тебя зовут?')

while (name == '' || name == null) {
   name = prompt('Привет как тебя зовут?')
}

alert( name + ', попробуй угадать число от 1 до 100')

let number = Math.floor(Math.random() * 101)
let guess = prompt("Какое число я загадал?")

while (guess != number) {
   if (guess > number){
      guess = prompt("Много попробуй еще раз")
   }

   if (guess < number){
      guess = prompt("Мало попробуй еще раз")
   }
}

alert('Ты угадал числи это число ' + number)

let img = document.getElementsByClassName("img")
