const displayDiv= document.getElementById('display')
const cart=document.getElementById('cart')
let count=0
async function FetchData()
{
    const data= await fetch('https://dummyjson.com/recipes')
    const res = await data.json()
    displaydata(res.recipes)
}

function displaydata(res){
    res.forEach(function(d){
     const div = document.createElement('div')
     div.classList.add('dt')
     const img= document.createElement('img')
     img.src=d.image
     const name = document.createElement('p')
     name.textContent=d.name
     const serv = document.createElement('p')
     serv.textContent="Servings :"+d.servings
     const rating = document.createElement('p')
     rating.textContent="Rating :"+d.rating+"*"
     //button div
     const btndiv = document.createElement('div')
     btndiv.classList.add('btndiv')
     //modal div 
     const modal=document.createElement('div')
     modal.classList.add('modal')
     const recipename = document.createElement('h3')
     recipename.textContent=d.name
     const ingr=document.createElement('p')
     ingr.textContent="Ingredients:"+d.ingredients
     const ins=document.createElement('p')
     ins.textContent="Instructions:"+d.instructions
     const preptime=document.createElement('p')
     preptime.textContent="Prepration:"+d.prepTimeMinutes+"minutes"
     const cooktime=document.createElement('p')
     cooktime.textContent="Cooking Time:"+d.cookTimeMinutes+"minutes"
     const diff=document.createElement('p')
     diff.textContent="Difficulty:"+d.difficulty
     const calorie=document.createElement('p')
     calorie.textContent="Calories:"+d.caloriesPerServing
     const close_button=document.createElement('button')
     close_button.textContent="close"
     close_button.addEventListener('click',function(){
        modal.style.display='none';
       
     })
     modal.append(recipename,ingr,ins,cooktime,preptime,calorie,diff,close_button)
     displayDiv.append(modal)


     const button= document.createElement('button')
     button.textContent="Get Recipe"
     button.addEventListener('click',function(){
        modal.style.display='block'
        // modal.classList.add("bg-color")
     })
     const cus=document.createElement('p')
     cus.textContent="Cuisine:"+d.cuisine
     const button2=document.createElement('button')
     button2.textContent="Order"
     button2.addEventListener('click',()=>{
        count++
        cart.textContent=count;
    })
    btndiv.append(button,button2)
    div.append(img,name,serv,rating,cus,btndiv)
    displayDiv.append(div)
    })
 }
 
FetchData()


