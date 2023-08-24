// excecute task 2 after 2 sec

// console.log("task 1")

// setTimeout( function(){
//     console.log('task 2')
// },2000);
   

// console.log('task 3')


// let demo=new Promise((resolve,reject)=>{
//     console.log('task 1')
//     setTimeout(()=>{
//         console.log('task 2')
//     },2000)
// }).then(()=>{
//     console.log('task 3')
// })

let api='http://www.omdbapi.com/?apikey=61e576a4&t='
let img=document.getElementById('img')
let title=document.getElementById('title')
let description=document.getElementById('description')
let genre=document.getElementById('genre')
let director=document.getElementById('director')
let actors=document.getElementById('actors')
let date=document.getElementById('date')
let rating=document.getElementById('rating')

let query=document.getElementById('input')

let btn=document.getElementById('inputGroup')

btn.addEventListener('click',function(){
    let movieQuery=api+query.value
    console.log(movieQuery)

    fetch(movieQuery)

    .then((Response)=>{
        return Response.json()
    })

    .then(data=>{
        console.log(data)
        title.innerHTML=data.Title
        description.innerHTML=data.Plot
        genre.innerHTML=data.Genre
        director.innerHTML=data.Director
        actors.innerHTML=data.Actors
        date.innerHTML=data.Released
        rating.innerHTML=data.imdbRating
        img.src=data.Poster
        
        
    })
    .catch(error=>{
        console.log(error)
    })
    
})