const request = async () => {
    let req = await fetch("https://ghibliapi.herokuapp.com/films/")
    let res = await req.json()
    console.log(res)
    res.forEach((data) => {
        let img = document.createElement("img")
        img.src = data.image
        const title = document.createElement("h1")
        title.style.color = "white"
        const originaltitle = document.createElement("h2")
        originaltitle.style.color = "white"
        const description =document.createElement("p")
        description.style.color = "white"
        const director = document.createElement("h3")
        director.style.color = "white"
        const producer = document.createElement("p2")
        producer.style.color = "white"
        const release_date = document.createElement("p3")
        release_date.style.color = "white"
        const running_time = document.createElement("p4")
        running_time.style.color = "white"
        const rt_score = document.createElement("p5")
        rt_score.style.color = "white"
        cardImg.append(img, title, originaltitle, description, director, producer, release_date, running_time, rt_score)
        img.addEventListener('mouseover', () => {
            title.innerText = data.title
            title.style.display = "block"
            originaltitle.innerText = data.original_title
            originaltitle.style.display = "block"
            description.innerText = data.description
            description.style.display = "block"
            director.innerText = data.director
            director.style.display = "block"
            release_date.innerText = data.release_date
            release_date.style.display = "block"
            running_time.innerText = data.running_time
            running_time.style.display = "block"
            rt_score.innerText = data.rt_score
            rt_score.style.display = "block"
        })
        img.addEventListener('mouseout', ()=>{
            title.style.display = "none"
            originaltitle.style.display = "none"
            description.style.display = "none"
            director.style.display = "none"
            release_date.style.display = "none"
            running_time.style.display = "none"
            rt_score.style.display = "none"
        })
        img.addEventListener("submit", (e) =>{
            e.preventDefault()
            img.src = data.image 
        })
    })
}
request()