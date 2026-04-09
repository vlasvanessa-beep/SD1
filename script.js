// Inicializa o mapa
const map = L.map('map').setView([-23.6872491414978, -46.553723770379456], 15);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona um marcador na localização da loja
L.marker([-23.6872491414978, -46.553723770379456])
  .addTo(map)
  .bindPopup("Faculdade Anhanguera SBC<br>R. Atlântica, 731 - Jardim do Mar, São Bernardo do Campo - SP, 09750-480")
  .openPopup();
