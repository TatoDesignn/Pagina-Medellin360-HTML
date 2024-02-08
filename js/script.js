var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);

function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng).addTo(map)
    .bindPopup("Tu ubicación está aquí.").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
  alert("No se pudo obtener tu ubicación. Asegúrate de que la geolocalización esté habilitada en tu navegador.");
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});