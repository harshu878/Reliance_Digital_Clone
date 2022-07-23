import navs from "../components/importnav.js"
import footer from "./components/footer.js"
import navbar from "./components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("#footer").innerHTML=footer();

      
// <<<<<<<<<<<<<<<<<<change here cart>>>>>>>>>>>>>>>>>>>>>>>>>>>
let cartpage='./cart.html'





// <<<<<<<<<<<<<<<<<import navbar and append to nav div>>>>>>>>>>>>>>>>>>>>
navs().then((navdata)=>{
    document.getElementById('nav').innerHTML=navdata
})

// <<<<<<<<<<<<<<<<<<<<<<<<<<<url   and fetch function>>>>>>>>>>>>>>>>>>>>>>>>>>
// ><<<<<<<<<<<<<<<<<<<<<<<inside fetch we can use sort function and filter and append >>>>>>>>>>>>>>>>>>>>>>>>>>>>
const url=`https://fakestoreapi.com/products`
fetchdata(url).then((data)=>{
    append(data)
    document.getElementById("sort").addEventListener("click",function(){
        handlepricesort(data)
    })
    document.getElementById('minmaxbutton').addEventListener("click",function(){
        handlefilter(data)
    
    })

})

// <<<<<<<<<<<<<<<<<<<<<<<<<<<fetch url>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<<<<<and return fetch data fetchdata function because we can use it again and again>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
async function fetchdata(url){
    try {
        let res=await fetch(url)
         let data=await res.json()
         return data
    } catch (error) {
        console.log(error)
    }
}




// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<data append to upperbox>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function append(appenddata){
  
    let upperbox=document.getElementById("upperbox")
    upperbox.innerHTML=""

    document.getElementById("productcount").textContent=`(Showing 1-${appenddata.length} products of ${appenddata.length} products)`
      appenddata.forEach((el)=>{
        // console.log(el)
       let mainbox= document.createElement("div")
       mainbox.setAttribute("class",'mainbox')
       mainbox.addEventListener("click",function(){
          savetocart(el)
       })

        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class",'imgdiv')
        let imag=document.createElement("img")
        imag.setAttribute("class","five")
        imag.src=el.image
        imgdiv.append(imag)
        
        let para=document.createElement("p")
        para.setAttribute("class",'para')
        para.textContent=el.description

        let price=document.createElement("h3")
        price.setAttribute("class",'rupees')
        price.textContent='₹'+el.price

        let offersavailable=document.createElement("div")
        offersavailable.setAttribute('class','offersavailable')
        let offer=document.createElement("button")
        offer.setAttribute('class','offer')
        offer.textContent='OFFERS AVAILABLE'
        let launch=document.createElement("button")
        launch.setAttribute('class','offer')
        launch.textContent='NEW LAUNCH'
        offersavailable.append(offer,launch)

        let lower=document.createElement("lowerdiv")
        lower.setAttribute("class",'lowerdiv')
        let compare=document.createElement("div")
        compare.setAttribute("class",'com')
        compare.textContent='Compare'
        let wish=document.createElement("div")
        wish.setAttribute("class",'com')
        wish.textContent='Wishlist'
        lower.append(compare,wish)

        mainbox.append(imgdiv,para,price,offersavailable,lower)
        upperbox.append(mainbox)
      })
}

// <<<<<<<<<<<<<<<<<<<CLICK ON BOX TO SAVE THE DATA FOR LOCAL STORAGE AND OPEN CART PAGE>>>>>>>>>>>>
let cartArr=JSON.parse(localStorage.getItem("lakhanlocalstorage"))||[]
function savetocart(el){
     cartArr.push(el)
     
     localStorage.setItem("lakhanlocalstorage",JSON.stringify(cartArr))
     window.location.href=cartpage
}





// <<<<<<<<<<<<<<<<<<<<<<<Simple sort function >>>>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<<<<<<<HIGH TO LOW OR LOW TO HIGH>>>>>>>>>>>>>>>>
// function handlepricesort(datas){
//     let selected=document.getElementById("sort").value
    
    
   
//     if(selected=='LTH'){
//        datas.sort((a,b)=>{
//         return a.price-b.price
//        })
//        append(datas)
//        localStorage.setItem("localsort",JSON.stringify(datas))
//     }

//     if(selected=='HTL'){
//         datas.sort((a,b)=>{
//             return b.price-a.price
//         })
//         append(datas)
//         localStorage.setItem("localsort",JSON.stringify(datas))
//     }
// }


// <<<<<<<<<<<<this sort function is sort only the data in localstorage>>>>>>>>>>>>>
function handlepricesort(datas){
    let selected=document.getElementById("sort").value
    let localArr=JSON.parse(localStorage.getItem('localsort'))||[]
    if(localArr==null || localArr==""){
        if(selected=='LTH'){
            datas.sort((a,b)=>{
             return a.price-b.price
            })
            append(datas)
            localStorage.setItem("localsort",JSON.stringify(datas))
         }
     
         if(selected=='HTL'){
             datas.sort((a,b)=>{
                 return b.price-a.price
             })
             append(datas)
             localStorage.setItem("localsort",JSON.stringify(datas))
         }
    }
    else{
        if(selected=='LTH'){
            localArr.sort((a,b)=>{
             return a.price-b.price
            })
            append(localArr)
            localStorage.setItem("localsort",JSON.stringify(localArr))
         }
     
         if(selected=='HTL'){
             localArr.sort((a,b)=>{
                 return b.price-a.price
             })
             append(localArr)
             localStorage.setItem("localsort",JSON.stringify(localArr))
         }
    }
   
}


// // <<<<<<<<<<<<<<<<<<<<Simple filter function>>>>>>>>>>>>>>>>>>>>
// function handlefilter(filterdata){

//     let min=document.getElementById('minprice').value
//     let max=document.getElementById('maxprice').value
  
//     let fil= filterdata.filter((el)=>{
//         if(min=="" && max==""){
//             return el
//         }
//          else if(min==""){
//             return el.price<=max
//          }
//          else if(max==""){
//             return el.price>=min
//          }
//          else{
//          return   el.price>=min  && el.price<=max
//          }
//      })
//      append(fil)
// }






function handlefilter(filterdata){
   
    let localArr=JSON.parse(localStorage.getItem('localsort'))
    let min=document.getElementById('minprice').value
    let max=document.getElementById('maxprice').value
  if(localArr!==null){
    let fil= localArr.filter((el)=>{
        if(min=="" && max==""){
            return el
        }
         else if(min==""){
            return el.price<=max
         }
         else if(max==""){
            return el.price>=min
         }
         else{
         return   el.price>=min  && el.price<=max
         }
     })
        append(fil)
        localStorage.setItem("localsort",JSON.stringify(fil))
    }
    else{
        let fill= filterdata.filter((el)=>{
                    if(min=="" && max==""){
                        return el
                    }
                     else if(min==""){
                        return el.price<=max
                     }
                     else if(max==""){
                        return el.price>=min
                     }
                     else{
                     return   el.price>=min  && el.price<=max
                     }
                 })
                 append(fill)
                
    }

}




