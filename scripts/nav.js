// <<<<<<<<<<<<<<<<<<<<<<<<<<navbar show or close func

let mobile=document.getElementById("mobilehover")
mobile.addEventListener("mouseover",function(){
   showfunc()
})

let mobilenav=document.getElementById("mobilehover")


function showfunc(){
    let mnavbar= document.getElementById("mobileNavbar")
     mnavbar.style.display='flex'
     let mobilenav=document.getElementById("mobilehover").addEventListener('mouseup',function(){
        closefunc()
     })

}
   
    

function closefunc(){
    let mnavbar= document.getElementById("mobileNavbar")
    mnavbar.style.display="none"

}

