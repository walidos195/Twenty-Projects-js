let form= document.querySelector('form');
let username= document.querySelector('.name');
let followers= document.querySelector('.followers');
let repos= document.querySelector('.repos');
let bio= document.querySelector('.bio');

let img= document.querySelector('.photo img');

let usernameInput;

let ev=form.addEventListener('submit',(e)=>{ e.preventDefault(); search(e);});


function search(e){
    usernameInput=e.target.querySelector('input').value;

    fetch("https://api.github.com/users/"+usernameInput)
    .then(jsonData=>jsonData.json())
    .then(jdata=>{
        console.log(jdata);
        username.innerText=jdata.name;
        followers.innerText=jdata.followers;
        repos.innerText=jdata.public_repos;
        bio.innerText=jdata.bio;
        img.setAttribute("src",jdata.avatar_url);
    })
   /* const octokit = new Octokit({
        auth: 'personal-access-token123'
      })
      
      await octokit.request('GET /users', {'walidos195'})
      */
}