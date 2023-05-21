let button = document.getElementById("button")
button.addEventListener("click", function(){
let quotes = {
      'Софья Сегюр':'Неверная память записывает благодеяния карандашом, а обиды вырезает на меди.',
      'Мэтт Шейд':'Не соблазняйся легкими деньгами.',
      'Филипп Поццо ди Борго':'Самое страшное не то, что я в кресле, а то, что я без неё.',
      'Сергей Шнуров':'Они собирались закручивать гайки, но они забыли, что болты-то все спизжены!',
      'Антон Городецкий':'— Причина смерти — позиционная асфиксия — Нет. Намеренное зло.', 
      'Неро Неве':'Иногда главное — не поступок. Иногда главное — бездейств',
      'Фредерик Бегбедер':'Не реклама копирует жизнь, а жизнь копирует рекламу.',
      'Джон Хэнкок':'Мать, да я щас тебе ухо откушу!'
   }


let authors = Object.keys(quotes)
let author = authors[Math.floor(Math.random() * authors.length)]
let quote = quotes[author]
let text = document.getElementById("quote").innerText = quote
let authorOfQuote = document.getElementById("quoteAuthor").innerText = author

})