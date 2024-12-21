function search() {
        // Captura o valor digitado na barra de pesquisa
        var searchTerm = document.getElementById('searchInput').value;

        if (searchTerm) {
            // Aqui você pode decidir o que fazer com o valor da pesquisa. 
            // Exemplo: redireciona para uma página de resultados de pesquisa (passando o termo na URL).
            window.location.href = '/search.html?q=' + encodeURIComponent(searchTerm);
        } else {
            alert('Digite algo para pesquisar.');
        }
    }
