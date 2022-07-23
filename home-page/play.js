
import navbar from "../navbar.html/Navbar/navbar.js"
document.getElementById("navbar").innerHTML=navbar()



import footer from "../footer/foot.js"
document.getElementById("footer").innerHTML=footer()


let data =[
    
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwaca99f36/crop/026534933_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       new:"Online Exclusive",
        name:"Cozy Linen",
        type:"Concentrated Room Spray",
        price:9.50

    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2ab413b9/crop/026555110_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       new:"Online Wxclusive",
        name:"Pumpkin Apple",
        type:"Concentrated Room Spray",
        price:13.50

    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfc9b5d26/crop/026534928_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       new:"New",
        name:"White Tea & Sage",
        type:"Concentrated Room Spray",
        price:13.50

    },
   
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7664db81/crop/026555112_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       new:"New",
        name:"Sweater Weather",
        type:"Concentrated Room Spray",
        price:10.50

    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf4383214/crop/026447054_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
         new:"New",
         name:"Sport",
         type:"Ultimate Hydration Body Cream",
         price:15.50
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw104a83c3/images/Summer2022/diff_bts_su3_ss.jpg?yocs=o_s_",
         new:"New",
         name:"Sport",
         type:"Ultimate Hydration Body Cream",
         price:15.50
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwbe9e1de6/images/Summer2022/sn_champ-toast_sum3_0_ss.jpg?yocs=o_s_",
         new:"New",
         name:"Sport",
         type:"Ultimate Hydration Body Cream",
         price:15.50
    },

]


import {append} from "./common.js"


function Myfunction(data){
    append(data)
}

Myfunction(data)