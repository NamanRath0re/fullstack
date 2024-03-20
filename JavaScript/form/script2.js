let signup = document.getElementById('signup').addEventListener('submit',signupform)

function signupform(e){
    e.preventDefault()
    let uname = e.target[0].value
    let upass = e.target[1].value
    let userDetails = JSON.parse(localStorage.getItem('user'))
    console.log(userDetails)
    if(userDetails.username==uname && userDetails.userpassword == upass)
    {
        alert('login successfull')
    }
    else{
        alert('username or password did not matched')
    }
}

