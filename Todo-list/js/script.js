let form = document.querySelector(".formBody")
let firstname = document.querySelector("#first")
let lastname = document.querySelector("#last")
let email = document.querySelector("#email") 
let password = document.querySelector("#password") 
let btn = document.querySelector("button")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation()
})

let formValidation = ()=>{
    if(firstname.value.trim() < 1){
        firstname.setCustomValidity("First Name cannot be empty"); 
    }else{
        firstname.setCustomValidity("");
    }
    if(lastname.value.trim() < 1){
        lastname.setCustomValidity("Last Name cannot be empty"); 
    }else{
        lastname.setCustomValidity("");
    }
    if(email.value.trim() < 1){
        email.setCustomValidity("Email cannot be empty"); 
    }else{
        email.setCustomValidity("");
    }
    if(password.value.trim() < 1){
        password.setCustomValidity("password cannot be empty"); 
    }else{
        password.setCustomValidity("");
        btn.innerText = "SUBMITTING..."
    }
}

btn.addEventListener("click",()=>{
    formValidation();
})