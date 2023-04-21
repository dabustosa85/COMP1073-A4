const jokeElement = document.getElementById('joke');

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        const joke = data.value;
        jokeElement.textContent = joke;
    })
    .catch(error => {
        console.error(error);
    });
