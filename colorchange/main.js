let button = document.getElementById('button')
let body = document.querySelector('body')
let color = ["red", "green", "yellow", "tomato", "white", "black", "blue", "purple"]

button.addEventListener("click", function(){
   let colorIndex = parseInt(Math.random() * color.length)  
   body.style.backgroundColor = color[colorIndex]   
})
