let cartes = document.querySelectorAll('.carte');
var firstCard, secondCard;
var reveal = true;
let listCard = [];
let currentorder;
cartes.forEach((carte) => {

    carte.style.order = Math.floor(Math.random() * cartes.length);

    carte.addEventListener('click', (e) => {

        // Si les carte ne sont pas en cours de revelation ou la carte ne fait pas parti des cartes trouvés
        if (reveal && !listCard.includes(carte.getElementsByClassName('double-face')[0])) {

            // Si premiere tirage

            if (firstCard === undefined) {
                firstCard = carte.getElementsByClassName('double-face')[0];
                firstCard.classList.toggle('active')
            }


            // Deuxieme tirage 

            else {

                //mettre le reveal en pause

                reveal = false;

                //si la deuxieme carte s'agit de la meme carte que la premiere 

                if (firstCard === carte.getElementsByClassName('double-face')[0]) {
                    if (firstCard.classList.contains('active')) {
                        firstCard.classList.remove('active')
                    }
                    firstCard = undefined;
                    reveal = true;
                }

                else {



                    secondCard = carte.getElementsByClassName('double-face')[0];
                    secondCard.classList.toggle('active');

                    // Si les deux ne sont pas identiques

                    if (firstCard.parentNode.getAttribute('data-attr') !== secondCard.parentNode.getAttribute('data-attr')) {
                        var fcard = firstCard;
                        var scard = secondCard;

                        //reveler pendant 2 sec puis retourner

                        setTimeout(() => {
                            fcard.classList.remove('active');
                            scard.classList.remove('active');
                            reveal = true;
                        }, 2000);
                        firstCard = undefined;
                        secondCard = undefined;
                    }

                    // Goal les bonnes cartes
                    else {
                        listCard.push(firstCard);
                        listCard.push(secondCard);
                        firstCard = undefined;
                        secondCard = undefined;
                        reveal = true;
                    }

                }


            }
        }
        // Si la partie est finie
        if (listCard.length === cartes.length) {
            document.getElementsByTagName('h1')[0].innerText = "YOUPI Partie Terminé";
        }
    })
})