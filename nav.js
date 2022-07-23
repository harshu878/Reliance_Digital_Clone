import navs from "../components/importnav.js";


navs().then((data)=>{
    document.getElementById("nav").innerHTML=data
})