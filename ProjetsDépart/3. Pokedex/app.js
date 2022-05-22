const searchinput=document.querySelector('#search');


function fetchPokemons(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(resp=>resp.json())
    .then((jdata)=>{
        console.log(jdata.results[0].url)
        console.log(fetchImgPokemon(jdata.results[0].url));
        
        
    })
}
function fetchImgPokemon(link){
    
    
   return fetch(link)
    .then(resp=>resp.json())
    .then((jdata)=>{
        
    //fetch
    
    jdata=fetch(jdata.forms[0].url)
    .then(resp=>resp.json())
    .then((jdata)=>{
        jdata= jdata.sprites.front_default; 
    })
    console.log(jdata)
    //endfeetch
    }
    
    )
}

function search(pokemon){

    console.log(searchinput.value);

}


searchinput.addEventListener('input',(e)=>{
    if(e.target.value===""){
        
        e.target.parentNode.classList.remove("active-search");
    }
    else{
        e.target.parentNode.classList.add("active-search");

    }
    fetchPokemons();
    search()
} );
