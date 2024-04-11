document.getElementById('ipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const ipAddress = document.getElementById('ipInput').value;
    fetch(`http://ip-api.com/json/${ipAddress}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `
                <p>País: ${data.country}</p>
                <p>Ciudad: ${data.city}</p>
                <p>Latitud: ${data.lat}</p>
                <p>Longitud: ${data.lon}</p>
            `;
        })
        .catch(error => console.error('Error al obtener la geolocalización:', error));
});

