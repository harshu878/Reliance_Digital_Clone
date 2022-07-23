var PhotosArray=[
    "https://www.reliancedigital.in/medias/OnePlus-TV-CLP-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDY4NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDBmL2g0OC85ODYyNDU3MjYyMTEwLmpwZ3xiNjUwZjZiNzQ0MWU0MjUzYmNmNmUyMzEzMDM2MzMxNDAzZWI5ZTNlOTQzMzdmYWU5MmRmN2Q2OTBiZTBjYjhi","https://www.reliancedigital.in/medias/iPhone-12-CLP-Banner-D-13.05.jpg?context=bWFzdGVyfGltYWdlc3w5MjE0MXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGM0Lzk4NjE5NzY3NTIxNTguanBnfDdiYmIxOTc2ZmY5NjUzZmRmNGFkNjg4YTExYjViNmU5ZTcyMTRjMjVmOTNiYTBiN2Y4OTljZWE3OTgwZjFlZTM","https://www.reliancedigital.in/medias/Electronics-Fest-CLP-D-18.07.jpg?context=bWFzdGVyfGltYWdlc3wxMjE2ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hmOS85ODYyNDMxNDA4MTU4LmpwZ3w1Mzk1MzMzMmI3MDg0OTc1ZWFiODkwNTk2ZTEwNDhhZGZhZTBmYWU3MDNhNjNmOGVkNWJkODk2OWFkZTFjNjhm","https://www.reliancedigital.in/medias/Samsung-Galaxy-M52-Desktop-20.06.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gwYy85ODYxOTc2NDkwMDE0LmpwZ3w5N2EzMDE4MWQ4ZTI5MmE1NDRkNjRlODJkYWNhNjJkYzQ5YzBiMDdjMThhYjhkOWU2MTAyM2YzZGQxNWIyYzk0","https://www.reliancedigital.in/medias/Lenovo-Laptops-Desktop-15.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzExODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDY5L2hiMC85ODYyMjA3MDQ1NjYyLmpwZ3w1MmIyMzI0MmY3NzJkYjI2YTI5NTdkZDMwYmUyMmQxZDIyMGY0MWI5OWM2ZTJhNzIxMDgyZjUxY2YyZTdmNzA5","https://www.reliancedigital.in/medias/Washotsav-Carousel-Banners-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTc0MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g4NS85ODYwNzM1NDY3NTUwLmpwZ3wyYmYyZDU2MWU0OGRkNGYzYTVlNDM3ZDRjMDUxMmZmY2RkYTFlOTVkYTc4NDVhOGY0MjE2NGViYmVkMzk3YTAy","https://www.reliancedigital.in/medias/RD-TV-DIGI-BIG-SCREEN-CLP-BANNER-HDFC-OFFER-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjI4MHxpbWFnZS9qcGVnfGltYWdlcy9oZDIvaDBiLzk4NjA3MzU1OTg2MjIuanBnfDIzMjNkNmI3N2UxOTgwOWU5ZTM3MjBjNDE4NzhjYzhlOWFlMjAzNGNkNzQ0MWMyYTI1NWM1NTQxNmI0Y2ZiMDA"]
    
    
    var img= document.getElementById('slideshow');
    var index=0;
    
    setInterval(function slide1(){
        img.setAttribute('src',PhotosArray[index]);
        index++;
        if(index>=PhotosArray.length)
        {
            index=0;
        }
    },2000);


    var PhotosArray2=["https://www.reliancedigital.in/medias/Samsung-Smart-HD-TV-NPI-D-11.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzk4NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2gwOC85ODYyNDU3NjU1MzI2LmpwZ3wxZjgxYTE3OTBjMjE4Zjg1YzEwZGU1ZjkzYzFkYjc2Yjg4YjQzNjkxNjQyNzQyMTkxNmIwMTA2MDcxNDk2YWNh","https://www.reliancedigital.in/medias/Sony-Bluetooth-WI-C100-D-NPI-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjE1NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ0L2g4My85ODYyNDMwODUxMTAyLmpwZ3xlZmRjZTEzZWI3YWYwMTlhNWY2YmVhMjMyNDJhZWEzYmZlMDFjMzRjYjI3YTE0Y2NkYThkZmE1MjZlODYzMDI5","https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Dial-NPI-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDAxOTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2g1Mi85ODYwNjY3ODAxNjMwLmpwZ3wyY2UxNjU1ZDQ1N2NjOTc4MmNhZjE2NTk1YTAwNDIwMjFjYjA2MzNhOGUxY2Y1YmYyMWI1NmZjZmQ0ZjNjNGNk","https://www.reliancedigital.in/medias/OnePlus-Nord-2T-5G-NPI-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjI4MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGY3Lzk4NjAwNjcwNjU4ODYuanBnfGEzZDhiNmRmYjBiYzg1YzFjOGI5MmFkMGJlZjYzMTAyY2FkNzNkMzIwNTdkYWM2ZTA0YzlkNzFjOTZiN2E1NDA"]
        
        
        var img1= document.getElementById('secondslideshow');
        var i=0;
        
        setInterval(function slide2(){
            img1.setAttribute('src',PhotosArray2[i]);
            i++;
            if(i>=PhotosArray2.length)
            {
                i=0;
            }
        },2000);