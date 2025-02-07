fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));



document.getElementById('Bottone').addEventListener('click', () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ContenutoCanzone').innerText = data.newContent;
        })
        .catch(error => console.error('Errore:', error));
});
