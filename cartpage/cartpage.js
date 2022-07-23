// let data = localStorage.getItem("cart")
// let app = JSON.parse(data);

let subtotal1 = 0;
let subtotal2=0;

let arrFromLS = JSON.parse(localStorage.getItem('cart'))||[];


displaycart(arrFromLS);
function displaycart(arrFromLS){
    arrFromLS.forEach(function (elem) {
console.log(elem);
let tbody = document.querySelector('#tbody');


let tr = document.createElement('tr');
tr.style.display='flex';

let div1 = document.createElement('div');
div1.style.display='flex';
let div2 = document.createElement('div');
let input = document.createElement('input');
input.setAttribute("type","number");
input.value= "1";;
// console.log("new:"+newinput);
let div4 =document.createElement('div');

let mdiv = document.createElement('div');
mdiv.style.paddingLeft='25px'
let img1 = document.createElement('img');
let div = document.createElement('div');
let td1 = document.createElement('td'); 
let td2 = document.createElement('td'); 
let td3 = document.createElement('td'); 
let td4 = document.createElement('td'); 

img1.src = elem.img;
img1.style.height="100px";


let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');

p1.innerHTML= elem.name;
p2.innerHTML= elem.type;
p3.innerHTML = "Add to My Love-It List";

div2.innerText= `$ ${elem.price}`;
div2.style.paddingLeft= "120px";
input.style.height= "50px";
input.style.width = "50px";
input.style.marginLeft = "180px"
input.style.textAlign = "center";
div4.innerText = `$ ${elem.price}`;
div4.style.marginLeft = "200px";

subtotal1+=elem.price;
let  subtotaldiv = document.getElementById('total_cart_value');
let shipingcharges = document.getElementById('shipping_value');
let cartTax = document.getElementById('cart_tax');
let ordertotal = document.getElementById('total_cart_price');

subtotaldiv.innerText= `$ ${subtotal1}`
shipingcharges.innerText = `$ ${Math.floor(subtotal1/20)}`;
cartTax.innerText = `$ ${Math.floor(subtotal1/25)}`;

ordertotal.innerHTML = `$ ${(subtotal1+Math.floor(subtotal1/20)+Math.floor(subtotal1/25))}`;


// div3.style.paddingLeft= "190px";
// const qty1 = document.getElementById('inputbox').value;

// console.log(qty1)


let totalcost;
// console.log("typeof:"+ typeof(totalcost));
// console.log(input.value);
// var n = document.getElementById('input').value;

 document.getElementById('refreshbutton').addEventListener("click",func1);

 function func1(e){
    event.preventDefault();
    let a = input.value;
    console.log("a:"+a);
    totalcost = elem.price*a;
    console.log(totalcost);
    div4.innerText = `$ ${totalcost}`;
    div4.style.marginLeft = "200px";
    subtotal2+=totalcost;
    subtotaldiv.innerText= `$ ${subtotal2}`;
    shipingcharges.innerText = `$ ${Math.floor(subtotal2/20)}`;
    cartTax.innerText = `$ ${Math.floor(subtotal2/25)}`
    ordertotal.innerHTML = `$ ${(subtotal2+Math.floor(subtotal2/20)+Math.floor(subtotal2/25))}`;



    console.log("totalsubtotal1:"+subtotal1)
    
console.log("totalsubtotal2:"+subtotal2)
    // alert(n)

 }
// console.log(n.value);
// alert(n)



// div4.innerText=

mdiv.append(p1,p2,p3)
div1.append(img1,mdiv);
tr.append(div1,div2,input,div4)
tbody.append(tr)
// tbody.append(tr)





    });

}
console.log("totalsubtotal1:"+subtotal1)
    
console.log("totalsubtotal2:"+subtotal2)
    
    // console.log(element.name);


    


// console.log(app)

// let tbody = document.querySelector('#tbody');
// let tr = document.createElement('tr');
// let img1 = document.createElement('img');
// let mdiv = document.createElement('div');
// let div = document.createElement('div');
// let td1 = document.createElement('td'); 
// let td2 = document.createElement('td'); 
// let td3 = document.createElement('td'); 
// let td4 = document.createElement('td'); 

// for(let i in app){

//     // console.log(i, app[i])

// if(i == "img" ){
//     img1.src=app[i];
//     img1.style.height='100px';
//     img1.style.padding= '20px'
//     mdiv.append(img1)
// }

// if(i=="type" ){

//     div.innerHTML+= `<p>${app[i]}</p>`
//     div.style.padding='10px'
//     mdiv.append(div)
// }if(i=="name" ){

//     div.innerHTML += `<p>${app[i]}</p>`
//     div.innerHTML += `Mix & Match: 5/$25 <br>`
    

//     mdiv.append(div)
// }

//  if(i == "price" ){
//     let a = `$${app[i]}`
//     td2.innerText=a;
//     td4.innerText=a;
// }
// // td3.innerHTML=butt


// // 
// // 


// mdiv.style.display="flex";
// mdiv.style.justifyContent= 'space-between'
// td1.append(mdiv)
// tr.append(td1,td2,td3,td4);
// tr.style.alignItems="center";
// tbody.append(tr)
// }


 

