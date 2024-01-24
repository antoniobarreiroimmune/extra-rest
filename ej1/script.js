document.addEventListener('DOMContentLoaded', () => {
    fetch('https://gutendex.com/books/')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('libros');
            data.results.forEach(book => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${book.formats['image/jpeg']}" alt="${book.title}">
                    <div class="card-title">${book.title}</div>
                    <div class="card-author">${book.authors.map(author => author.name).join(', ')}</div>
                `;
                container.appendChild(card);
            });
        });
});
