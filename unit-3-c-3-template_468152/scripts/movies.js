// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let totalarr = []
let total = JSON.parse(localStorage.getItem("amount"));
console.log(total)
totalarr.push(total)

let total1 = totalarr.reduce((acc,el)=>{
    return acc+Number(el)
},0)
document.getElementById("wallet").innerText = total;


let movies_div = document.getElementById("movies");

let id;

async function searchmovies(){
    try{
        let search = document.getElementById("search").Value;

        let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=d32c24b9
        `)

        let data = await res.json();

        appendmovies(data.Search);
        console.log(data)
       

       
       

    }

    catch(err){
        console.log("error:",err)
    }
}
let arr2 =[]

function appendmovies(data)
{
    // if(data == undefined)
    // {
    //     return false;
    // }
 
    data.forEach((el)=>{
        let div = document.createElement("div");

        let image = document.createElement("img")
        image.src = el.Poster;

        let name = document.createElement("p")
        name.innerText = el.Title;

        let btn = document.createElement("button")
        btn.innerText = "book now";
        btn.setAttribute("class","book_now")
        btn.onclick=()=>
        {
            arr2.push(el)
            localStorage.setItem("movie",JSON.stringify(arr2))
            window.location.href="checkout.html"
        }

        div.append(image,name,btn)

        document.getElementById("movies").append(div)

    })
}

async function main(){
    let data = await searchmovies();

    if(data == undefined){
        return false;
    }

    appendmovies(data)
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }


    id = setTimeout(function(){
        func()
    },delay)
}