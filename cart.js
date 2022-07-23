// let items=JSON.parse(localStorage.getItem("lakhan"))

//  console.log(items)
// let cartlength=document.querySelector("h3")
// cartlength.innerText=items.length;

// appendcart(items)

// import navbar from "./navbar.js"
// document.getElementById("navbar").innerHTML = navbar()
// import footer from "./footer.js"
// document.getElementById("footer").innerHTML = footer()




append();

function append(){

    let data=JSON.parse(localStorage.getItem("lakhanlocalstorage"))

    var h2=document.getElementById("totamount");
    let total=0;

    for(let i=0;i<data.length;i++){
        total=total+data[i].price;
    }
    h2.innerText=total;


    data.forEach(function(el,i){

        // let box=document.getElementById("box")
        // box.innerHTML=null;
        let container=document.getElementById("cart");
        // container.innerHTML=null
 
        let box=document.createElement("div");
        box.setAttribute("id","box")
        let div=document.createElement("div");
        div.setAttribute("id","append");

        let img=document.createElement("img");
        img.src=el.image;

        let div1=document.createElement("div");
        div1.setAttribute("id","desc")

        let title=document.createElement("p");
        title.setAttribute("id","title")
        title.innerText=el.title;

        let div2=document.createElement("div");
        div2.setAttribute("id","div2")

        let price=document.createElement("h3");
        price.setAttribute("id","price");
        price.innerText=`₹ ${(el.price)}`;

        let span1=document.createElement("span")
        span1.innerText="Free Shipping";

        let mrp=document.createElement("p");
        mrp.innerText="Standard Delivery: 27 Jul (Wed)-28 Jul (Thu)";
        mrp.style.color="#1f4985"

        let save=document.createElement("p");
        save.innerText="*Delivery assurance is subject to our delivery locations staying open as per govt. regulations";
        save.style.color="#1f4985"


        
         
        
        let btn=document.createElement("button");
        btn.innerText="Remove"
        btn.setAttribute("class","remove");
        btn.addEventListener("click",function(){
            remove(el,i);
        })

        let btn2=document.createElement("button");
        btn2.innerText="Move to wishlist";
        btn2.setAttribute("id","btn2");
        
        
        container.append(box);
        box.append(div)
        div.append(img);
        // container.append(box)
        box.append(div1)
        div1.append(title)
        //  container.append(box)
         box.append(div2)
        div2.append(price,span1,mrp,save)
       
        
        box.append(btn,btn2)


    })


    function remove(el,i){
        data.splice(i,1);
        localStorage.setItem("lakhanlocalstorage",JSON.stringify(data));
        window.location.reload();
    }
}