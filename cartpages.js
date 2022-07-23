import navbar from "./navbar.js"
document.getElementById("navbar").innerHTML = navbar()
import footer from "./footer.js"
document.getElementById("footer").innerHTML = footer()


var Photos=["https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzA0NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g3NS85ODQxMjI3MzAwODk0LmpwZ3xmZWFjMjg5NzlhMTY5OTZmNDZkYTczZjlmNWY1YmY5YTRhMDVjN2RiZjhiYmM1YTNjNWI1N2QzNmMyNjRlZWYz","https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NDA4ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaGZiL2g3Yi85ODQxMjE5MTA4ODk0LmpwZ3wyOWY0NmUyYTMyMzBhNTM1Njg0OGU0OWZkMTYzNDMyNWQ2YjYzYjhiYTU5MWFjMDhjNjFjNDgxNzVhYjQ0MmZk","https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1Njg4OTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDY3L2hkNi85ODQxMjIwNDE5NjE0LmpwZ3xlZDc3ZjhkNThkZTNkMjQxYjFiM2EwMmE3ODA1NTM2YmFlNWU0Y2QzYTgwYTRlZjAyY2ZkZmNiNDIzNjYxZDc2", "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2ODI2MzB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ0L2hkZi85ODQxMjIyMDU4MDE0LmpwZ3wzZTU0ZjFiZTM5NTUwMTZkY2VlNDZhMWFhNGJmMTk4NWU2Zjc0ODg5ZDNmODgxN2Q1MjNjMWRlNTYyYzdjNzdk", "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTMwMTB8aW1hZ2UvanBlZ3xpbWFnZXMvaDUxL2gzNy85ODQxMjI0MzUxNzc0LmpwZ3wzM2IzMmI1YjA2NDdmYTkzNzgzMDBjNGU1ZDM2N2IxMWY3NzdiYTVjNjEzZmMyYTk2ZjFhMTlhZjQxYmU0ZjI3"]
        
        
var im= document.getElementById('cartimg');
var i=0;

setInterval(function slide2(){
    im.setAttribute('src',Photos[i]);
    i++;
    if(i>=Photos.length)
    {
        i=0;
    }
},2000);