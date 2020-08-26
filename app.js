function pokedex() {

    fetch("https://pokeapi.co/api/v2/pokemon/")
         .then(res => res.json())
         .then(function(data) {
             let character = document.querySelector("");
             quote.innerText = data.contents.quotes[0].quote;
         });
 
 }
 
 export default pokedex;

https://pokeapi.co/api/v2/pokemon/