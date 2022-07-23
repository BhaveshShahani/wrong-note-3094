import navbar from "../Navbar/navbar.js"
import foot from "../footer/foot.js"

document.querySelector("#navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = foot();

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
        window.location.href = "../home-page/home.html"
    }
    else{
        alert("Wrong Email or Password");
        localStorage.setItem("login",JSON.stringify(false));
        
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
let btn = document.getElementById("signupBtn");


btn.addEventListener("click",function(){
    createAccount();
})
function createAccount(){
    window.location.href = "../signup/signup.html"
}