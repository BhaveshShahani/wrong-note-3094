let append = (data)=>{
    
    let cont = document.querySelector("#container");
    cont.innerHTML = "";
    data.forEach(element => {
         let div = document.createElement("div");
         let img = document.createElement("img");
         let h3 = document.createElement("h3");
         let h32 = document.createElement("h3");
         let p = document.createElement("p");
         let p2 = document.createElement("p");
         let p3 = document.createElement("p");
         let btn = document.createElement("button");
         btn.innerText = "Add To Bag"
       
         
         btn.addEventListener("click",()=>{
            addCart(element);
         })
         img.src = element.img;
         h3.innerText = element.new;
         h3.style.color = "blue";
         h3.style.fontStyle = "italic"
         h32.innerText = element.name;

         p.innerText = element.type;
         p.style.color= "gray"
         p.style.fontSize = "90%"
         p2.innerText ="$" + "" +element.price;
     
         p3.innerText = "Mix & Match Full-Size : Buy 3 Get, 1 Free"
         p3.style.width = "60%"
         p3.style.margin = "auto"
         p3.style.color = "red"
         p3.style.fontSize = "80%"

         div.append(img,h3,h32,p,p2,p3,btn);
         img.addEventListener("click",()=>{
            checkout(element);
         })
         cont.append(div);
    });
}


let checkout = (ele)=>{
    localStorage.setItem("checkout",JSON.stringify(ele));
    window.location.href ="checkout.html";
}

let cartData = JSON.parse(localStorage.getItem("cart"))||[];

let addCart = (ele)=>{
    localStorage.setItem("cart",JSON.stringify(ele));
    window.location.href = "../cartpage/cartpage.html"
}






export {append} 