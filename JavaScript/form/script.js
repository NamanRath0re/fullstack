const login = document.getElementById('login').addEventListener('submit',signup)

function signup(e){
    e.preventDefault();
    let userDetails ={
    username : e.target[0].value,
    userpassword : e.target[1].value
    }
    console.log(userDetails)
    localStorage.setItem('user',JSON.stringify(userDetails))
    window.location.href="./signup.html"
}