
import navbar from "../Navbar/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

import sidebar from "../Sidebar/sidebar.js"
document.getElementById("sidebar").innerHTML=sidebar()


import footer from "../footer/foot.js"
document.getElementById("footer").innerHTML=footer()


let data =[
    {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw61169db9/crop/026544280_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New Exclusive",
    name:"blue Barry Maple",
    type:"Ultimate Hydration Body Cream",
    id:"Body Cream",
    price:12.0
     
    
    },
    {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8961c297/crop/026546721_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New Exclusive",
    name:"blue Barry Maple",
    type:"Ultimate Hydration Body Cream",
    id:"Body Cream",
    price:18.50
     
    
    },
    {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd60af319/hires/026537630_alt_1.jpg?sh=413&yocs=o_s_" ,
    new:"New Exclusive",
    name:"blue Barry Maple",
    type:"Enchanted Candy Portion",
    id:"Body Cream",
    price:18.50
     
    
    },
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe9b129f1/crop/026495794_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"Online Exclusive",
    name:"White Jasmin",
    type:"Shower Gel",
    
    price:"13.50"
     
    
    },
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9bee01ac/images/Summer2022/fbc_poppy_su3_gpt.jpg?yocs=s_" ,
    new:"New Fragrance",
    name:"Poppy",
    type:"Fine Fragrance Mist",
    price:17.50
     
    
    },
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw22c9610c/crop/026494225_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New Exclusive",
    name:"Enchanted Candy Potion",
    type:"Ultimate Hydration Body Cream",
    id:"Body Cream",
    price:16.50
     
    
    },
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5f97699d/images/Summer2022/xcat_halloween_su3_gpt.jpg?yocs=s_" ,
    new:"New",
    name:"Holloween Tricks & Treats",
    type:"Body Spray",
    
    price:17.50
     
    
    },
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3d7b64eb/crop/026490260_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New",
    name:"Pumpkin Cupcakes",
    type:"Fine Fragrance Mist",
    
    price:16.50
     
    
    },
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8bb2cbdb/hires/026536756_alt_1.jpg?sh=413&yocs=o_s_" ,
    new:"New",
    name:"leaves",
    type:"3 wick candel",
    
    price:13.50
     
    
    },

    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb5c29370/crop/026537144_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New",
    name:"Vampaire Blood",
    type:"3 wick candel",
    
    price:13.50
     
    
    },
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6b65261f/crop/026546722_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New",
    name:"Autmn",
    type:"3 wick candel",
    
    price:13.50
     
    
    },
    
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9bee01ac/images/Summer2022/fbc_poppy_su3_gpt.jpg?yocs=s_" ,
    new:"New Fragrance",
    name:"Poppy",
    type:"Fine Fragrance Mist",
    price:17.50
     
    
    },
    {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw22c9610c/crop/026494225_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New Exclusive",
    name:"Enchanted Candy Potion",
    type:"Ultimate Hydration Body Cream",
    id:"Body Cream",
    price:12.50
     
    
    }
    ,
    {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw61169db9/crop/026544280_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New Exclusive",
    name:"blue Barry Maple",
    type:"Ultimate Hydration Body Cream",
    id:"Body Cream",
    price:12.0
     
    
    },
    {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8961c297/crop/026546721_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New Exclusive",
    name:"blue Barry Maple",
    type:"Ultimate Hydration Body Cream",
    id:"Body Cream",
    price:18.50
     
    
    }
        ,
        {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw870aa060/crop/026499131_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    new:"New Exclusive",
    name:"blue Barry Maple",
    type:"Ultimate Hydration Body Cream",
    id:"Body Cream",
    price:12.0
    

    },

    {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd60af319/hires/026537630_alt_1.jpg?sh=413&yocs=o_s_" ,
    new:"New Exclusive",
    name:"Cousy kasmer",
    type:"Enchanted Candy Portion",
    id:"Body Cream",
    price:18.50
     
    
    },
    {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd6ef9cca/crop/026538274_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_ " ,
    new:"New Exclusive",
    name:"leather and brandy",
    type:"Enchanted Candy Portion",
    id:"Body Cream",
    price:20.50
     
    
    },
    {img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw61169db9/crop/026544280_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" ,
    new:"New Exclusive",
    name:"blue Barry Maple",
    type:"Ultimate Hydration Body Cream",
    id:"Body Cream",
    price:12.0
     
    
    },

{img:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw870aa060/crop/026499131_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
new:"New Exclusive",
name:"blue Barry Maple",
type:"Ultimate Hydration Body Cream",
id:"Body Cream",
price:12.0
 

}

   


   
    





]


    import {append} from "./common.js"

 





function Myfunction(data){
    append(data)
}

Myfunction(data)