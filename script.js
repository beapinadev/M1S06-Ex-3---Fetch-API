
function fetchData() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados:', response.statusText);
            }
            return response.json();
        })
        .then(jsonData => {
            document.getElementById('json-content').textContent = JSON.stringify(jsonData, null, 2);
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}

fetchData();