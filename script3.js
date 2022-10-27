let saying=document.getElementById('saying');
let another=document.getElementById('new')
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {saying.innerText=quote.quote + ' - '+quote.character+' from '+quote.anime;
})
function again(){
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {saying.innerText=quote.quote + '-'+quote.character;
console.log(character)})
}
another.addEventListener('click',again);