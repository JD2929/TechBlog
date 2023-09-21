const loginHandler = async (e)=>{
    e.preventDefault()

    console.log("click");

    const userLogin =document.querySelector('#login-username').value
    const userPassword= document.querySelector('#login-password').value

    const response =await fetch('/api/user/login', {
        method:'POST',
        body: JSON.stringify({
            username: userLogin,
            password: userPassword
        }),
        headers: {'Content-Type' : 'application/json'}
    })

    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert('Failed to login')
    }
}

document
.querySelector(".login-form")
.addEventListener("submit", loginHandler)