const searchinput = document.querySelector('#search');

var tab = {
    name: "",
    id: "",
    url: ""
};
var pokemons=[];
function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(resp => resp.json())
        .then((jdata) => {

            jdata.results.forEach(element => {
               
                fetchPokemon(element.url, element.name);
                pokemons.push(tab);
            });
        })
}





function fetchPokemon(link, name) {
    fetch(link)
        .then(resp => resp.json())
        .then((jdata) => {
            //fetch
            fetch(jdata.forms[0].url)
                .then(resp => resp.json())
                .then((jdata) => {
                    tab.id = jdata.id;
                    tab.name = name;
                    tab.url = jdata.sprites.front_default;
                })
            //endfeetch
        }
        )
}







function search(pokemon) {

    console.log(searchinput.value);

}


searchinput.addEventListener('input', (e) => {
    if (e.target.value === "") {

        e.target.parentNode.classList.remove("active-search");
    }
    else {
        e.target.parentNode.classList.add("active-search");

    }
    fetchPokemons();
    search()
});
