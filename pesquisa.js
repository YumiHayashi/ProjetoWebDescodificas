// Lista de filmes
    const movies = [
        "Interstellar",
        "Rapunzel",
        "Duna",
        "Godzilla",
        "Your Name",
        "Deadpool & Wolverine",
        "Cobra Kai",
        "Round 6",
        "Samurai dos Olhos Azuis",
        "Hannibal",
        "Percy Jackson e os Olimpianos",
        "Arcane"
    ];

    // Função de pesquisa
    function search() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const results = movies.filter(movie => movie.toLowerCase().includes(searchTerm));

        displayResults(results);
    }

    // Função para exibir os resultados da pesquisa
    function displayResults(results) {
        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = '';  // Limpa resultados anteriores

        if (results.length > 0) {
            results.forEach(movie => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('movie-item');
                resultItem.textContent = movie;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.textContent = 'Nenhum filme encontrado.';
        }
    }
