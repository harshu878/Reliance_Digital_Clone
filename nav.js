import navs from "../components/importnav.js";
import footer from "./components/footer.js"
import navbar from "./components/navbar.js"

document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("#footer").innerHTML=footer();

navs().then((data)=>{
    document.getElementById("nav").innerHTML= data
})
    