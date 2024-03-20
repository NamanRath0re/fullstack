let num=document.getElementById('p')
let count=0
let plus=document.getElementById('add')
let minus=document.getElementById('sub')
let reset=document.getElementById('reset')


plus.addEventListener('click',add)
function add()
{
        count++
        num.textContent = count
    
}

minus.addEventListener("click",function()
{
    
        count--
        num.textContent=count
    
})
