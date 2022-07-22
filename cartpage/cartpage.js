// let data = localStorage.getItem("cart")
// let app = JSON.parse(data);



async function f1() {
    const x = await resolveAfter2Seconds(document.getElementById('qty'));
    console.log(x.value); // 10
    alert(x)
  }
  f1();
// await {
//     const n = document.getElementById('qty');
//     console.log(n.value);

// }

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
let div3 = document.createElement('div');
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
div3.innerHTML+=`<select name="qty" id="qty">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>`;
div3.style.paddingLeft= "190px";

let totalcost=elem.price ;
// const n = document.getElementById('qty');
// console.log(n.value);
// alert(n)



// div4.innerText=

mdiv.append(p1,p2,p3)
div1.append(img1,mdiv);
tr.append(div1,div2,div3)
tbody.append(tr)
// tbody.append(tr)





    });

}
    
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


 

