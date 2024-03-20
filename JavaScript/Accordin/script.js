let sec1=document.getElementById('section1')
let sec2=document.getElementById('section2')
let sec3=document.getElementById('section3')

sec1.addEventListener("click",function(){
    document.getElementById('content1').classList.toggle('con1')
})
sec2.addEventListener("click",function(){
    document.getElementById('content2').classList.toggle('con2')
})
sec3.addEventListener("click",function(){
    document.getElementById('content3').classList.toggle('con3')
})