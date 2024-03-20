const slides = document.querySelectorAll('.slides')
const btnnext = document.querySelector("#next")
const btnprevious = document.querySelector("#previous")
var counter=0;
console.log(slides)
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
})

btnnext.addEventListener('click',()=>{
    if(counter < slides.length - 1)
    {
    counter++
    slideImage()
    }
})
btnprevious.addEventListener('click',()=>{
    if(counter!=0){
    counter--
    slideImage()
    }
})

const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}