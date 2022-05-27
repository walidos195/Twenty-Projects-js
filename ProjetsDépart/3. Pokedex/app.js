const searchinput = document.querySelector('#search');
let allPokemon = [];
let frPokemon = [];
let index = 21;
const types = {
    grass: '#78c850',
    ground: '#E2BF65',
    dragon: '#6F35FC',
    fire: '#F58271',
    electric: '#F7D02C',
    fairy: '#D685AD',
    poison: '#966DA3',
    bug: '#B3F594',
    water: '#6390F0',
    normal: '#D9D5D8',
    psychic: '#F95587',
    flying: '#A98FF3',
    fighting: '#C25956',
    rock: '#B6A136',
    ghost: '#735797',
    ice: '#96D9D6'
};
const ulPokemons = document.querySelector('.pokemons');

fetchPokemons();

function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(resp => resp.json())
        .then((jdata) => {
            jdata.results.forEach(pokemon => {
                fetchPokemonComplet(pokemon);
            });

        })
}

function fetchPokemonComplet(pokemon) {
    let objPokemon = {};
    let url = pokemon.url;
    let namePokemon = pokemon.name;

    fetch(url)
        .then(resp => resp.json())
        .then((jdata) => {
            objPokemon.pic = jdata.sprites.front_default;
            objPokemon.type = jdata.types[0].type.name;
            objPokemon.id = jdata.id;
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${namePokemon}`).then(resp => resp.json()).then(
                (pokedata) => {
                    objPokemon.name = pokedata.names[4].name;
                    allPokemon.push(objPokemon);
                    if (allPokemon.length === 150) {
                        frPokemon = allPokemon.sort((a, b) => { return a.id - b.id }).slice(0, 21);
                        createCard(frPokemon)
                    }
                }
            )
        })
}

function createCard(pokemons) {

    for (let i = 0; i < pokemons.length; i++) {
        const li = document.createElement('li');
        li.style.background = types[pokemons[i].type];
        li.classList.add('pokemon');

        var img = document.createElement('img');
        img.src = pokemons[i].pic;

        var name = document.createElement('h5');
        name.innerHTML = pokemons[i].name;

        const p = document.createElement('p');
        p.innerHTML = "ID# " + pokemons[i].id;

        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(p);

        ulPokemons.appendChild(li);

    }
}


//==========

//=========

function addPoke(number) {

    if (index > 151) {
        return;
    }
    const arrtoAdd = allPokemon.slice(index, index + number);
    createCard(arrtoAdd);
    index += number;


}



window.addEventListener('scroll',
    () => {

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 20) {
            addPoke(6);
        }
    }

)



searchinput.addEventListener('keyup', (e) => {
    const listPok = document.querySelectorAll('li');
    const restel = 151 - index;
    addPoke(restel);
    if (e.target.value === "") {
        listPok.forEach((li) => {
            li.style.display = "flex";
        })
        e.target.parentNode.classList.remove("active-search");
    }
    else {
        listPok.forEach((li) => {
            if (li.innerText.toUpperCase().indexOf((e.target.value).toUpperCase()) > -1) {
                li.style.display = "flex";
            } else {
                li.style.display = "none";
            }

        })

        e.target.parentNode.classList.add("active-search");

    }
});
