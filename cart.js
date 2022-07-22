// let items=JSON.parse(localStorage.getItem("lakhan"))

//  console.log(items)
// let cartlength=document.querySelector("h3")
// cartlength.innerText=items.length;

// appendcart(items)

// function appendcart(el){
    // 
    
        // let div=document.createElement("div")
        // let img=document.createElement("img")
        // img.src=el.image
        // img.style.width="250px"
        
        // let name=document.createElement("p")
        // name.innerHTML=el.name
        // let price=document.createElement("p")
        // price.innerText=el.price
        // let p=document.createElement("p")
        // p.innerText="*Delivery assurance is subject to our delivery locations staying open as per govt. regulations"
        // let btn=document.createElement("button")
        // btn.innerHTML="Remove";
        // let btn2=document.createElement("button")
        // btn2.innerHTML="Move to wishlist";

//         div.append(img,name,price,p)

// let parent=document.getElementById("container");
// parent.append(div)
//     // })
// }

// let amount=document.getElementById("totamount")
// amount.innerText=items.price

let product=[{id:1,
    title:"Google Nest Mini Smart Voice Activated Speaker, Charcoal",
    price:3499.00,
    mrp:"M.R.P.: ₹4499  Inclusive of all taxes ",
    save:"You Save: 22%(₹1,000)",
    image:"https://www.reliancedigital.in/medias/Google-GA00781-IN-Smart-Display-and-Speakers-491630510-i-1?context=bWFzdGVyfGltYWdlc3wxNDA4MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2hiNC85MjMxNDUzMjkwNTI2LmpwZ3wzYTRmYmUyYWM0ZDU3ZGY0YzFiNDNiY2I1ZmYyZGVhYzBiMDExNTdmNzI2MzdlOWVmOTdhMGFiMjZkYTMwZGRj",
    instimg:"https://www.reliancedigital.in/build/client/images/insta_delivery_icon.png",
    INSTA:"Insta DeliveryINSTA Delivery (within 3 hours)",
    stdimg:"https://www.reliancedigital.in/build/client/images/standard_delivery_icon.png",
    std:"Standard DeliveryStandard Delivery: 26 Jul (Tue)-27 Jul (Wed)",

   },
    // {id:2,
    //     title:"Mens Casual Premium Slim Fit T-Shirts ",price:22.3,
    //     description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",category:"men's clothing",
    //     image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //     rating:{"rate":4.1,"count":259}},
    //     {id:3,
    //         title:"Mens Cotton Jacket",
    //         price:55.99,
    //         description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",category:"men's clothing",
    //         image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //         rating:{"rate":4.7,"count":500}},
    //         {id:4,
    //             title:"Mens Casual Slim Fit",
    //             price:15.99,
    //             description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    //             category:"men's clothing",
    //             image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    //             rating:{"rate":2.1,"count":430}},
    //             {id:5,
    //                 title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    //                 price:695,
    //                 description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    //                 category:"jewelery",
    //                 image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    //                 "rating":{"rate":4.6,"count":400}
    //             }
]

                console.log(product)
//  let p=new product(id,title,price,description,category,image,rating);
//  let data=JSON.parse(localStorage.getItem("lakhan"));
//  data.push(p);
 localStorage.setItem("lakhan",JSON.stringify(product));



append();

function append(){

    let data=JSON.parse(localStorage.getItem("lakhan"))

    var h2=document.getElementById("totamount");
    let total=0;

    for(let i=0;i<data.length;i++){
        total=total+data[i].price;
    }
    h2.innerText=total;


    data.forEach(function(el,i){

        let container=document.getElementById("cart");

        let div=document.createElement("div");
        div.setAttribute("id","append");

        let img=document.createElement("img");
        img.src=el.image;

        let div1=document.createElement("div");
        div1.setAttribute("id","desc")

        let title=document.createElement("p");
        title.innerText=el.title;

        let price=document.createElement("p");
        price.setAttribute("id","price");
        price.innerText=`₹ ${(el.price)}`;

        let mrp=document.createElement("p");
        mrp.innerText=el.mrp

        let save=document.createElement("p");
        save.innerText=el.save

        
        let span1=document.createElement("span")
        span1.innerText="Free Shipping";

        

        let divr=document.getElementById("btnremove");
        

        let btn=document.createElement("button");
        btn.innerText="Remove"
        btn.setAttribute("class","remove");
        btn.addEventListener("click",function(){
            remove(el,i);
        })

        container.append(div);
        div.append(img);
        div.append(div1);
        div1.append(title,price,mrp,save,span1)

        divr.append(btn);
        btn.append(btn)

    })


    function remove(el,i){
        data.splice(i,1);
        localStorage.setItem("lakhan",JSON.stringify(data));
        window.location.reload();
    }
}