let input = document.getElementById('input');
let button = document.getElementById('button');
let div = document.getElementById('todocontainer');

button.addEventListener('click',function(){
   let par =document.createElement('p')
   par.innerText = input.value
   div.appendChild(par)
   par.addEventListener('dblclick',function(){
      div.removeChild(par)
   })
   par.addEventListener('click',function(){
      par.style.color="red"   
   })
})


