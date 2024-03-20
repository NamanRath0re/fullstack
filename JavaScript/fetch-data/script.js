function fetchData()
{
    fetch('https://fakestoreapi.com/products')
    .then(function(d){
        return d.json()
    })
    .then(function(data){
        console.log(data);
        display(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
fetchData()
function display(data)
{
    data.forEach(function(p)
    {
    const div=document.createElement('div')
    div.classList.add("products")
    const h2=document.createElement('h2')
    h2.textContent=p.title
    const para=document.createElement('p')
    para.textContent="Price:$"+p.price
    const img=document.createElement('img')
    img.src=p.image
    const btn=document.createElement('button')
    btn.classList.add('button')
    btn.textContent="Details"
    btn.onclick=function()
    {
        modal.style.display='block';
    }
    div.append(img,h2,para,btn)
    document.getElementById('main').appendChild(div)
    
    const modal=document.createElement('div')
    modal.classList.add('modal')
    const mode=document.createElement('div')
    mode.classList.add('mode')
    const close_btn=document.createElement('button')
    close_btn.textContent="close"
    
    close_btn.onclick=function(){
        modal.style.display='none'
    }
    const modal_content=document.createElement('p')
    modal_content.textContent=p.title
    const modal_content2=document.createElement('p')
    modal_content2.textContent="Price:$"+p.price
    const img2=document.createElement('img')
    img2.src=p.image
    modal.appendChild(mode)
    mode.append(img2,modal_content,modal_content2,close_btn)
    document.getElementById('main').appendChild(modal)
    
})
}
 
// document.querySelector('.button').addEventListener('click',function(data){
//     document.querySelector('.button').style.display='block'
//     data.forEach(function(a){
//         const div2=document.createElement('div')
//         div2.classList.add("description")
//         const h=document.createElement('h2')
//         h.textContent=a.title
//         const par=document.createElement('p')
//         par.textContent="Price:$"+a.price
//         const img=document.createElement('img')
//         img.src=a.image
//         const cat=document.createElement('p')
//         cat.textContent=a.category
//         const des=document.getElementById('p')
//         des.textContent=a.description
//         div2.append(img,h.par,cat,des)
//         document.getElementById('main').appendChild()
//     })
// })