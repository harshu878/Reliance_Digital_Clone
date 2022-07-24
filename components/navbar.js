
let login = Boolean(localStorage.getItem('login')) || false
let regduser=JSON.parse(localStorage.getItem("userdatabase")) ||[];
 
if(regduser.length > 0) {var fname = regduser[0].fname}
let navbar =()=>{
    if(login===true)
    {
    return `<div id="header">
    <div class="store">
       <img src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg" alt="" class="locationlogo">
       <p class="position">Find a store</p>
       <p class="position">Buying Guides</p>
       <p class="position"><a href="./ContactUs.html">Contact us</a></p>
   </div>
   <div class="middlebox">
   <a href="./index.html">
   <div class="reliancelogo">
           <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="">
       </div>
       </a>

       <div id="searchbar">
           <input type="search" placeholder="Find Your favorite Products" id="q">

       
           </div>
            <div class="logincart">
      <a href="./cart.html"><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" class="lgp">
       <p class="lgp">Cart</p></a>
       <a href="./login.html"> <img src="https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png" alt="" class="lgp">
       <p class="lgp">${fname}</p></a>
   </div>
   </div>`
}
else{
    return `<div id="header">
    <div class="store">
       <img src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg" alt="" class="locationlogo">
       <p class="position">Find a store</p>
       <p class="position">Buying Guides</p>
       <p class="position"><a href="./ContactUs.html">Contact us</a></p>
   </div>
   <div class="middlebox">
   <a href="./index.html">
   <div class="reliancelogo">
           <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="">
       </div>
       </a>

       <div id="searchbar">
           <input type="search" placeholder="Find Your favorite Products" id="q">
         
           </div>
            <div class="logincart">
      <a href="./cart.html"><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" class="lgp">
       <p class="lgp">Cart</p></a>
       <a href="./login.html"> <img src="https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png" alt="" class="lgp">
       <p class="lgp">Login</p></a>
   </div>
   </div>`
}
}
export default navbar

