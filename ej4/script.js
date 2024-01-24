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


            select.addEventListener('change', function () {
                const opcionSeleccionada = this.options[this.selectedIndex].text;
                alert("Has seleccionado: " + opcionSeleccionada);
            });
        })
        .catch(error => console.error('Error:', error));
}


document.addEventListener('DOMContentLoaded', cargarPlanetas);
