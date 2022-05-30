
let form = document.querySelector('form');
let text = document.querySelector('input[type=text]');
let ul = document.querySelector('ul');
let rmv = document.querySelectorAll('ul li button');
let checkbox = document.querySelectorAll('ul li input[type=checkbox]');

text.addEventListener('keyup', (e) => {

    console.log('e.target.value: ', e.target.value);
    if (e.target.value === "") {
        e.target.parentNode.classList.remove("activeinput");
    }
    else {
        e.target.parentNode.classList.add("activeinput");

    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (text.value !== "") {

        createTask(text.value);
        text.value = "";
        rmv = document.querySelectorAll('ul li button');
        addeventrmv();
        checkbox = document.querySelectorAll('ul li input[type=checkbox]');
        addeventcheck();
    }
})

addeventrmv();

addeventcheck();
function addeventrmv() {
    rmv.forEach(element => {
        element.addEventListener('click', (e) => {
            ul.removeChild(e.target.parentNode.parentNode)
        })
    });
}

function addeventcheck() {
    
    checkbox.forEach(element => {
        element.addEventListener('change', (e) => {
            if(e.target.checked){
                e.target.parentNode.getElementsByTagName("span")[0].style.textDecoration="line-through";
            }
            else{
                e.target.parentNode.getElementsByTagName("span")[0].style.textDecoration="none";

            }
        })
    });
}

function createTask(task) {
    const li = document.createElement('li');
    const check = document.createElement('input');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    const img = document.createElement('img');
    check.type = "checkbox";
    span.innerText = task;
    img.src = "ressources/fermer.svg";
    btn.appendChild(img);
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);


}

