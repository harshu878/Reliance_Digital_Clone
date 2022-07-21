const url=`https://fakestoreapi.com/products`
fetchdata(url)

async function fetchdata(url){
    try {
        let res=await fetch(url)
         let data=await res.json()
       append(data)
    } catch (error) {
        console.log(error)
    }
}


function append(appenddata){
    console.log(appenddata)
}