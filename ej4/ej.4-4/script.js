function cargarPlanetas() {
    fetch('https://rickandmortyapi.com/api/location')
        .then(response => response.json())
        .then(data => {
            const planetas = data.results;
            const select = document.getElementById('dropdown-planet');
            planetas.forEach(planeta => {
                const opcion = document.createElement('option');
                opcion.value = planeta.id;
                opcion.textContent = planeta.name;
                select.appendChild(opcion);
            });

            // Seleccionar un planeta aleatoriamente y mostrar sus personajes
            const planetaAleatorioIndex = Math.floor(Math.random() * planetas.length);
            const planetaAleatorio = planetas[planetaAleatorioIndex];
            mostrarPersonajes(planetaAleatorio.id);

            // Controlador de eventos para el cambio de selección
            select.addEventListener('change', function () {
                const planetaId = this.value;
                mostrarPersonajes(planetaId);
            });
        })
        .catch(error => console.error('Error:', error));
}

function mostrarPersonajes(planetaId) {
    fetch(`https://rickandmortyapi.com/api/location/${planetaId}`)
        .then(response => response.json())
        .then(data => {
            const personajes = data.residents;
            const divPersonajes = document.getElementById('personajes');
            divPersonajes.innerHTML = '';

            personajes.forEach(urlPersonaje => {
                fetch(urlPersonaje)
                    .then(response => response.json())
                    .then(personajeData => {
                        const p = document.createElement('p');
                        p.textContent = personajeData.name;
                        divPersonajes.appendChild(p);
                    });
            });
        })
        .catch(error => console.error('Error al cargar personajes:', error));
}

document.addEventListener('DOMContentLoaded', cargarPlanetas);
