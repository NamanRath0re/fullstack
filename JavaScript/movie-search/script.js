const searchText=document.getElementById('searchText')
const searchButton=document.getElementById('searchButton')
const mainDiv=document.getElementById('main')
searchButton.addEventListener('click',fetchData)

function fetchData(){
    console.log(searchText.value)
    fetch(`https://www.omdbapi.com/?S=${searchText.value}&apikey=2411a5ce`)
    .then(function(res){
        return res.json()
        // console.log(res.json())
    })
    .then(function(data){
        console.log(data)
        displayData(data.Search)
    })
}

function displayData(movies)
{
    mainDiv.textContent=""
    movies.forEach(function(d)
    {
        const div=document.createElement('div')
        div.classList.add('content')
        const title=document.createElement('p')
        title.textContent="Year:"+d.Year
        const type=document.createElement('p')
        type.textContent="Type:"+d.Type
        const img=document.createElement('img')
        img.src=d.Poster
        div.append(img,type,title)
        mainDiv.appendChild(div)
    })
}