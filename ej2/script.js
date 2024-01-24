document.addEventListener('DOMContentLoaded', function () {
    fetchRandomCharacter();
});

function fetchRandomCharacter() {
    const randomId = Math.floor(Math.random() * 500) + 1;
    fetch(`https://api.disneyapi.dev/characters/${randomId}`)
        .then(response => {

            return response.json();
        })
        .then(data => {
            if (data && data.data) {
                displayCharacter(data.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            document.getElementById('character').innerHTML = `Error: ${error.message}`;
        });
}

function displayCharacter(character) {
    const characterDiv = document.getElementById('character');
    if (character && character.name && character.imageUrl) {
        characterDiv.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.imageUrl}" alt="${character.name}">
            <p>ID: ${character._id}</p>
            ${character.films && character.films.length > 0 ? filmList(character.films) : ''}
        `;
    } else {
        characterDiv.innerHTML = 'Character data is incomplete or undefined.';
    }
}

function filmList(films) {
    const listItems = films.map(film => `<li>${film}</li>`).join('');
    return `<ul>${listItems}</ul>`;
}
