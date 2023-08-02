let signInEmail = document.getElementById("signInEmail")
let signInPassword = document.getElementById("signInPassword")
let signUpName =document.getElementById("signUpName")
let signUpEmail =document.getElementById("signUpEmail")
let signUpPassword =document.getElementById("signUpPassword")
let userName = document.getElementById("userName")
let singup = document.getElementById("exist")
let login = document.getElementById("incorrect")


let username =localStorage.getItem('sessionUsername')
if(username){
    userName.innerHTML="Welcom "+username
}

let signUpArray =[]
if(localStorage.getItem('users') == null){
    signUpArray =[]
}
else{
    signUpArray= JSON.parse(localStorage.getItem('users'))
}

function isEmpty(){
    if(signUpName.value =="" || signUpEmail.value =="" || signUpPassword.value == ""){
        return false
    }
    else{
        return true
    }
}

function isEmail(){
    for( let i=0; i<signUpArray.length; i++){
        if(signUpArray[i].email.toLowerCase() == signUpEmail.value.toLowerCase() ){
            return false
        }
    }
}

function singUp(){
    if(isEmpty() == false){
        singup.innerHTML='<span class="text-danger m-3">All inputs is required</span>'
        return false
        
    }

    let singUpData ={
        name:signUpName.value,
        email:signUpEmail.value,
        password:signUpPassword.value
    }
    if(signUpArray.length == 0){
        signUpArray.push(singUpData)
        localStorage.setItem("users",JSON.stringify(signUpArray))
        singup.innerHTML='<span class="text-success m-3">Success</span>'
        return true
    }
    if(isEmail() == false){
        singup.innerHTML='<span class="text-danger m-3">email already exists</span>'
    }
    else{
        signUpArray.push(singUpData)
        localStorage.setItem("users",JSON.stringify(signUpArray))
        singup.innerHTML='<span class="text-success m-3">Success</span>'

    }



}


function isLoginEmpty(){
    if(signInEmail.value == "" || signInPassword.value == ""){
        return false
    }
    else{
        return true
    }
}

function logIn(){
    if(isLoginEmpty() == false){
        login.innerHTML ='<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    let password = signInPassword.value
    let email = signInEmail.value
    for( let i=0; i<signUpArray.length; i++ ){
        if(signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase == password.toLowerCase){
            localStorage.setItem('sessionUsername',signUpArray[i].name)
            window.location.href ="home.html"

        }
        else{
            login.innerHTML='<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}


function logout() {
    localStorage.removeItem('sessionUsername')
}




