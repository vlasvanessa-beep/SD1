// Inicializa o mapa
const map = L.map('map').setView([-23.561684, -46.655981], 15);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona um marcador na localização da loja
L.marker([-23.561684, -46.655981])
  .addTo(map)
  .bindPopup("Loja Exemplo<br>Rua das Flores, 123 - São Paulo/SP")
  .openPopup();
