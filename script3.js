let saying=document.getElementById('saying');
let another=document.getElementById('new')
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {saying.innerText=quote.quote + ' - '+quote.character+' from '+quote.anime;
})
.catch((error) => {
    console.error('Error:', error);
  })
function again(){
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {saying.innerText=quote.quote + '-'+quote.character;
console.log(character)})
.catch((error) => {
    console.error('Error:', error);
  })
}
another.addEventListener('click',again);