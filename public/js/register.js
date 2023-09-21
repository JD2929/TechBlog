const registerHandler = async (e)=>{
    e.preventDefault()
    console.log("click");

    const userUsername =document.querySelector('#register-username').value
    const userPassword= document.querySelector('#register-password').value

    console.log(userUsername, userPassword);

    const response =await fetch('/api/user/', {
        method:'POST',
        body: JSON.stringify({
            username: userUsername,
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
.querySelector(".register-form")
.addEventListener("submit", registerHandler)