const elJoke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generatejoke)

generatejoke();

async function generatejoke() {
    const config = {
        headers: {
            'Accept':'application/json'
        }
    }
    // USING DOT THEN
    // fetch('https://icanhazdadjoke.com/', config).then(response => response.json()).then((data) => {
    //     elJoke.innerHTML = data.joke
    // })

    // USING ASYNC AWAIT

    const response = await fetch('https://icanhazdadjoke.com', config);

    const data = await response.json();

    elJoke.innerHTML = data.joke


}