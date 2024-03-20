// function display()
// {
//     const data=document.createElement('p')
//     data.textContent='hii'
//     document.getElementById("msg").appendChild(data)
// }
// setInterval1(display,5000)


function display()
{
    document.getElementById('modal').style.display="block"
}
setTimeout(display,2000)

const btn2=document.getElementById('btn2')
btn2.addEventListener('click',close)
function close()
{
    document.getElementById('modal').style.display="none"
}

setInterval(function(){
    const dt=new Date()
    document.getElementById('dt').textContent=dt.toLocaleTimeString()
},1000)

console.log('line 28')