

const url = "https://dummyjson.com/products"
let wrapper = document.querySelector('.swiper-wrapper')
// let slide = document.querySelector('.swiper-slide')

async function fetchData(){
    let res = await fetch(url);
    let data = await res.json();
    let products = data.products;
    // console.log(data.products);
    displayData(products);
}
fetchData();
function displayData(products){
    // console.log(data)
    products.forEach((el)=>{
        let div = document.createElement('div')
        div.classList.add('swiper-slide')  
        let img = document.createElement('img')
        img.src=el.thumbnail
        img.alt= el.title
        let title = document.createElement('h4')
        title.textContent = el.title
        let price = document.createElement('h4')
        price.textContent = `Price : ${el.price}`
        div.append(img,title,price)
        wrapper.appendChild(div)
    })
}