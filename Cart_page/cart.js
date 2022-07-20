let items=JSON.parse(localStorage.getItem("relianceCart"))

 console.log(items)
// let cartlength=document.querySelector("h3")
// cartlength.innerText=items.length;

appendcart(items)

function appendcart(el){
    // 
    
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image
        img.style.width="250px"
        
        let name=document.createElement("p")
        name.innerHTML=el.name
        let price=document.createElement("p")
        price.innerText=el.price
        let p=document.createElement("p")
        p.innerText="*Delivery assurance is subject to our delivery locations staying open as per govt. regulations"
        // let btn=document.createElement("button")
        // btn.innerHTML="Remove";
        // let btn2=document.createElement("button")
        // btn2.innerHTML="Move to wishlist";

        div.append(img,name,price,p)

let parent=document.getElementById("container");
parent.append(div)
    // })
}

let amount=document.getElementById("totamount")
amount.innerText=items.price