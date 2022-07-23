import navbar from "../navbar.html/Navbar/navbar.js";
import foot from "../footer/foot.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = foot();

let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit",function(e){
    e.preventDefault();
    let data = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        confirmEmail: form.confirmEmail.value,
        code: form.code.value,
        phone: form.phone.value,
        password: form.password.value,
        confirmPassword: form.confirmPassword.value
    }
    if(data.email == data.confirmEmail && data.password === data.confirmPassword){
        if(checkEmail(data.email)===true){
            alert("Account created Successfully");
            userData.push(data);
            console.log(userData);
            localStorage.setItem("userData",JSON.stringify(userData));
            window.location.href = "../login/login.html"
        }
        else{
            alert("Account Already Exists")
            window.location.href = "../login/login.html"
        }
    }
    else{
        alert("check Your Email or Password");
    }
    
})

let checkEmail = (email)=>{
    let filteredEmail = userData.filter((ele)=>{
        return email == ele.email;
    })
    if(filteredEmail.length>0){
        return false;
    }
    else{
        return true;
    }
}