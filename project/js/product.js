const url = "https://dummyjson.com/products"
const prod = document.getElementById('product')
let products=[]
let cart = []
async function fetchData(){
    let res = await fetch(url);
    let data = await res.json();
    products = data.products;
    localStorage.setItem('products',JSON.stringify(products))
    console.log(products);
    displayData(products);
}
fetchData();
function displayData(products){
    prod.textContent=""
    products.forEach((el)=>{
        const div = document.createElement('div')
        div.classList.add('pro-img')
        const img = document.createElement('img')
        img.src = el.thumbnail
        img.alt = el.title
        const brand = document.createElement('p')
        brand.textContent = el.category
        const link =document.createElement('a')
        link.href=`pro.html?id=${el.id}`
        // link.target="_blank"
        const title = document.createElement('h4')
        title.textContent = el.title
        link.appendChild(title)

        const btn = document.createElement('button')
        btn.addEventListener('click',function(){
            window.location.href=`pro.html?id=${el.id}`

        })
        btn.textContent = "Details" 

        const btn2 = document.createElement('button')
        btn2.textContent="Add to cart"
        btn2.classList.add="addtocart"
        btn2.addEventListener('click',addtocart)
        btn2.setAttribute('data-cart',JSON.stringify(el))
        // console.log(btn2)

        div.append(img,brand,link,btn,btn2)
        prod.appendChild(div)
    })
}

function addtocart(e)
      {
        const item=e.target.getAttribute('data-cart')
        console.log(item)
        cart.push(item)
        console.log(cart)
        localStorage.setItem('cart',JSON.stringify(cart))
        document.getElementById('cart-badge').textContent=cart.length
        alert("Item added")
      }


let filteredProducts=[]
document.getElementById('search').addEventListener('change',searchpro)

function searchpro (e)
{
    console.log(e.target.value)
    if(e.target.value=="all"){
        displayData(products)
    }
    else{
    filteredProducts= 
    products.filter((pro)=>
    pro.category==e.target.value
    ) 
    displayData(filteredProducts)
    }
    
}

document.getElementById('searchProduct').addEventListener('input',searchResult)
let searchedata=[]
function searchResult(e)
{
    
    searchedata=products.filter(
    (proo)=>
    (proo.title.toLowerCase()==e.target.value.toLowerCase())|| (proo.category.toLowerCase()==e.target.value.toLowerCase())
    )
    console.log(searchedata)
   displayData(searchedata)
    
    
    // else{
    //     searchedata=products.filter(
    //     (prooo)=>
    //     (prooo.title.toLowerCase()==e.target.value.toLowerCase())|| (prooo.category.toLowerCase()==e.target.value.toLowerCase())
    //     )
    //    displayData(searchedata)
    //     }
}