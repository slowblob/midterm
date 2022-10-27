let saying=document.getElementById('saying');
let button=document.getElementById('submit');
let button2=document.getElementById('again');
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {saying.innerText=quote.quote;
    let character=quote.character;
    let anime=quote.anime
    function checkanswer(){
        let answer=document.getElementById('answer').value
        let correct=document.getElementById('correct')
        if (character.toLowerCase()==answer.toLowerCase()){
            correct.innerText='You are correct!';
        }
        else{
            correct.innerText='You are wrong '+character+' from '+anime +' said this.';
        }
    }
button.addEventListener('click',checkanswer);
console.log(character)})
function again(){
    let answer=document.getElementById('answer')
    answer.value=''
    correct.innerText=''
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {saying.innerText=quote.quote;
    let character=quote.character;
    let anime=quote.anime;
    function checkanswer(){
        let answer=document.getElementById('answer').value
        let correct=document.getElementById('correct')
        if (character==answer){
            correct.innerText='You are correct!';
        }
        else{
            correct.innerText='You are wrong '+character+' from '+anime +' said this.';
        }
    }
button.addEventListener('click',checkanswer);
console.log(character)})
}
button2.addEventListener('click',again)
    
