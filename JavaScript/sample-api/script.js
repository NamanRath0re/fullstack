async function fetchData(){
    const data = await fetch('https://api.sampleapis.com/codingresources/codingResources')
    const res= await data.json()
    displaydata(res)
}

function displaydata(res){
   res.forEach(function(d){
    const div = document.createElement('div')
    div.classList.add('datta')
    const title = document.createElement('p')
    title.textContent=d.description
    const anchr= document.createElement('a')
    anchr.href=d.url
    anchr.textContent="click me"
    div.append(title,anchr)
    document.getElementById('main').append(div)
   })
}

fetchData()