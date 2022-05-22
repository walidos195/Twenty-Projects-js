const form = document.querySelector('.form-quizz');
let tab_resultat = [];
let tab_bool = [];
let tab_correct = ['a', 'a', 'a', 'a', 'a'];

let box=document.querySelectorAll(`.box`);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const rep = document.querySelector('.form-quizz');
    for (let index = 1; index < 6; index++) {
        tab_resultat.push(document.querySelector(`input[name="q${index}"]:checked`).value)
    }
    check(tab_resultat);
    console.log(tab_bool)
    tab_resultat = []
    tab_bool = []
})

function check(tab) {
    for (let i = 0; i < tab_correct.length; i++) {
        if (tab_correct[i] === tab[i]) {
            tab_bool.push(true);
            box[i].classList.add("correct");
            box[i].classList.remove("faux");
        }
        else {
            tab_bool.push(false);
            box[i].classList.add("faux");
            box[i].classList.remove("correct");
        }

    }
}