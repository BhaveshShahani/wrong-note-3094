
let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("userData")) || [];
let login = false;
form.addEventListener("submit",function(event){
    event.preventDefault();
    let data = {
        email: form.loginEmail.value,
        password: form.loginPassword.value
    }

    if(checkSignin(data.email,data.password)===true){
        alert("Signin Successfull");
        localStorage.setItem("signinData",JSON.stringify(data));
        localStorage.setItem("login",JSON.stringify(true));
        // window.location.href = ""
    }
    else{
        alert("Wrong Email or Password");
        localStorage.setItem("login",JSON.stringify(false));
        // window.location.href = "signup.html";
    }
})

let checkSignin = (email,password)=>{
    let check = userData.filter((ele)=>{
        return ele.email === email && ele.password === password;
    })
    if(check.length>0){
        return true;
    }
    else{
        return false;
    }
}