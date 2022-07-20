const login = Boolean(localStorage.getItem('login')) || false
const users = JSON.parse(localStorage.getItem('users')) || []
if(users.length>0){ const name = users[users.length - 1].name }

let navbar =(name)=>{
    if(login===true)
    {
    return `<div id="header">
    <div class="store">
       <img src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg" alt="" class="locationlogo">
       <p class="position">Find a store</p>
       <p class="position">Buying Guides</p>
       <p class="position">Contact Us</p>
   </div>
   <div class="middlebox">
   <a href="./index.html">
   <div class="reliancelogo">
           <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="">
       </div>
       </a>

       <div id="searchbar">
           <input type="search" placeholder="Find Your favorite Products" id="q">

            <button id="searchbtn">Search</button>
           </div>
            <div class="logincart">
      <a href="./cart.html"><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" class="lgp">
       <p class="lgp">Cart</p></a>
       <a href="./login.html"> <img src="https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png" alt="" class="lgp">
       <p class="lgp">${name}</p></a>
   </div>
   </div>`
}
else{
    return `<div id="header">
    <div class="store">
       <img src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-location-vector-icon-white-transparent-background-png-image_1978014.jpg" alt="" class="locationlogo">
       <p class="position">Find a store</p>
       <p class="position">Buying Guides</p>
       <p class="position">Contact Us</p>
   </div>
   <div class="middlebox">
   <a href="./index.html">
   <div class="reliancelogo">
           <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="">
       </div>
       </a>

       <div id="searchbar">
           <input type="search" placeholder="Find Your favorite Products" id="q">

            <button id="searchbtn">Search</button>
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


// </div>
// <div id=dropdown>
//    <ul>
//        <li id="mt">MOBILE & TABLETS</li>
//        <li id="ta">TELEVISION AND AUDIO</li>
//        <li id="ha">HOME APPLIANCES</li>
//        <li id="co">COMPUTERS</li>
//        <li id="ca">CAMERAS</li>
//        <li id="ka">KITCHEN APPLIANCES</li>
//        <li id="pc">PERSONAL CARE</li>
//        <li id="ac">ACCESSORIES</li>
//    </ul>
//    </div>
// ​
//    <div id="popupdiv">
//        <div id="toggle1" class="toggledisp">
//            <div id="mobandtab">
//                <div>
//                    <ul>
//                        <a href="./prodcatalogfromnav.html"><li class="bold">Smartphone</li></a>
//                        <li>Accessories</li>
//                        <li>Apple Accessories</li>
//                        <li> Mobile Accessories</li>
//                        <li>Tublet Accessories</li>
//                        <li>Docking Accessories</li>
//                        <li>Mobile Grips & standa</li>
//                    </ul>                            
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Smart and Wearbales</li>
//                        <li>Trending Smart Watches</li>
//                    </ul>
//                </div>                        
//            </div>
//        </div>
//        <div id="toggle2" class="toggledisp">
//            <div id="tel&aud">
//                <div>
//                    <ul>
//                        <li class="bold">Telivisions</li>
//                        <li>Smart Tv</li>
//                    </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Speciality Speakers</li>
//                        <li class="bold">Gaming</li>
//                        <li>Gaming Consoles</li>
//                    </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Reconnect Disney | Marvel Audio Collection</li>
//                    </ul>
//                </div>
//            </div>
//        </div>
//        <div id="toggle3" class="toggledisp">
//            <div id="homapp">
//                <div>
//                    <ul>
//                        <li class="bold">Air conditioning</li>
//                        <li>Split Air Conditioners</li>
//                           <li>Window Air Conditioners</li> 
//                           <li> Smart Air Conditioners</li>
//                           <li> Energy Efficient Air Conditioners</li>
//                           <li> 1 ton Air Conditioners</li>
//                           <li> 1.5 ton Air Conditioners</li>
//                           <li> 1.5 ton Air Conditioners</li>
//                            </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Washing Machines</li>
//                           <li>Fully Automatic Front Load</li>
//                           <li> Fully Automatic Top Load</li>
//                           <li>Semi-Automatic Top Load</li>
//                           <li>Washing Machine Detergents & Liquids</li>
//                         </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Dish washers</li>
//                    </ul>
//                </div>
//            </div>
//        </div>
//        <div id="toggle4" class="toggledisp">
//            <div id="comp">
//                <div>
//                    <ul>
//                        <li class="bold">Laptop</li>
//                        <li>Basic use laptops</li>
//                        <li> Student Laptops</li>
//                        <li> Thin and light Laptops</li>
//                        <li> Multi-Tasking Laptops</li>
//                        <li> Gaming Laptops</li>
//                        <li> Content creator Laptops</li>
//                </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Bluetooth & WiFi Speakers</li>
//                        <li class="bold">Internet Connectivity Devices</li>
//                    </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Computer Accessories</li>
//                        <li>Computer Networking Cables</li>
//                        <li>Laptop Chargers & Adaptor</li>
//                        <li>Laptop Bags & Sleeves</li>
//                        <li>Laptop Cooling Pad</li>
//                        <li>Laptop Screen Protectors</li>
//                     </ul>
//                </div>
//            </div>
//        </div>
//        <div id="toggle5" class="toggledisp">
//            <div id="cam">
//                <div>
//                    <ul>
//                        <li class="bold">DSLR Cameras</li>
//                        <li>Mirrorless Cameras</li>
//                        <li>Point & Shoot Cameras</li>
//                        <li>ProSumer Cameras</li>
//                        <li>Action Cameras</li>
//                         </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Digital Camera Accessories</li>
//                        <li>Camera Batteries & Chargers</li>
//                        <li>Camera bags & cases</li>
//                        <li>Tripods & Monopods</li>
//                        <li>Action Camera Accessories</li>
//                </ul>
//                </div>
               
//            </div>
//        </div>
//        <div id="toggle6" class="toggledisp">
//            <div id="kitchapp">
//                <div>
//                    <ul>
//                        <li class="bold">Microwave Ovens</li>
//                        <li class="bold"> Water Purifiers</li>
//                        <li class="bold">Fruits and Vegetable Cleaner</li>
//                        <li class="bold">Oven Toaster Grillers (OTG)</li>
//                    </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Induction Cookers</li>
//                        <li class="bold">Food Processors</li>
//                        <li class="bold">Blenders</li>
//                        <li class="bold">Kitchen Hobs & Gas Stoves</li>
//                     </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold"> Specialty Appliances</li>
//                        <li>Electric Kettles</li>
//                        <li>Water Dispensers</li>
//                        <li>Wet Grinders</li>
//                       </ul>
//                </div>
//            </div>
//        </div>
//        <div id="toggle7" class="toggledisp">
//            <div id="percare">
//                <div>
//                    <ul>
//                        <li class="bold">Shavers and Trimmers</li>
//                        <li class="bold"> Epilators</li>
//                        <li class="bold">Hair Dryers & Stylers</li>
//                        <li class="bold">Irons</li>
//                     </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li> Reconnect Disney|Marvel Grooming Collection</li>
//                        <li>Hygiene & Personal Care</li>
//                        <li>Digital Thermometers</li>
//                        </ul>
//                </div>
               
//            </div>
//        </div>
//        <div id="toggle8" class="toggledisp">
//            <div id="acces">
//                <div>
//                    <ul>
//                        <li class="bold">Bags Cases & Sleeves</li>
//                        <li class="bold">Smart Devices</li>
//                        <li>Smart Plugs</li>
//                        <li>Smart Cameras</li>
//                        <li>Smart Sensors</li>
//                        <li>Smart Lights</li>
//                        <li>Smart Speakers</li>
//        </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">Reconnect Disney | Marvel Accessories</li>
//                        <li class="bold">Memory Cards</li>
//                        <li class="bold">Mounts & Stands</li>
//                        <li class="bold">Pen Drives</li>
//                        <li class="bold">Routers</li>
//                 </ul>
//                </div>
//                <div>
//                    <ul>
//                        <li class="bold">External Hard Disks</li>
//                        <li class="bold">Headphones & Headsets</li>
//                        <li class="bold">Keyboards</li>
//                        <li class="bold">Indoor Lighting</li>
//                    </ul>
//                </div>
//            </div>
//        </div>
       
//    </div>