var tab = {
    name: "",
    id: "",
    url: ""
};
var pokemons = [];
const searchinput = document.querySelector('#search');
const ulPokemons = document.querySelector('.pokemons');
fetchPokemons();
function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(resp => resp.json())
        .then((jdata) => {

            jdata.results.forEach(element => {


                fetch(element.url)
                    .then(resp => resp.json())
                    .then((jdata) => {
                        //fetch
                        fetch(jdata.forms[0].url)
                            .then(resp => resp.json())
                            .then((jdata) => {
                                tab.id = jdata.id;
                                tab.name = element.name;
                                tab.url = jdata.sprites.front_default;
                                ulPokemons.appendChild(makePokemon(tab));
                                pokemons.push(tab);
                            })

                    }
                    )







               // fetchPokemon(element.url, element.name);
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

        }
        )
}


function makePokemon(element) {
    var li = document.createElement('li');
    li.classList.add('pokemon');

    var img = document.createElement('img');
    img.src = element.url;

    var name = document.createElement('h5');
    name.innerHTML = element.name;

    var p = document.createElement(p);
    p.innerHTML = "ID# " + element.id;

    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(p);


    //`<li class="pokemon"><img src="${element.url}"><h5>${element.name}</h5><p>ID# ${element.id}</p></li>`;
    return li;
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
    search()
});
