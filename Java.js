
function displaysongs(songs) {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
    .then(response => response.json())
    .then(songs => {
        displaysongs(songs); 
        return songs; 
    })
    
    .catch(error => console.error('Error:', error));

    //let showcards = document.getElementById("showcards")
    //showcards.innerHTML=""
    
    let eminem = document.getElementById("eminem")
    eminem.classList.remove("d-none"); 

    songs.data.forEach(song => {
        const card = document.createElement("div")
        card.classList.add("card", "mb-2", "bg-transparent" , "border-0")

        const img = document.createElement("img")
        img.src = song.album.cover_medium
        img.classList.add("card-img-top")
        
        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body", "px-0")

        const cardTitle = document.createElement("h4")
        cardTitle.classList.add("card-body", "px-0")
        cardTitle.innerText = song.title

        const cantanti = document.createElement("h6")
        cantanti.classList.add("card-text", "fw-light", "fs-small")
        cantanti.innerText = song.artist.name

        cardBody.appendChild(cardTitle); 
        cardBody.appendChild(cantanti); 

        card.appendChild(img); 
        showcards.appendChild(card)
});
}

displaysongs(); 








