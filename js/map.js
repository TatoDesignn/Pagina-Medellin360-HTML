const map = L.map('map'); 

map.setView([6.2427, -75.5745], 13); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); 


let marker, circle, zoomed;

function success(pos) {

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    if (marker) {
        map.removeLayer(marker);
        map.removeLayer(circle);
    }

    marker = L.marker([lat, lng]).addTo(map).bindPopup("Aqui estoy!").openPopup();
    circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

    if (!zoomed) {
        zoomed = map.fitBounds(circle.getBounds()); 
    }

    map.setView([lat, lng]);

}

function error(err) {

    if (err.code === 1) {
        alert("Porfavor permita el acceso a la geolocalizacion.");
    } else {
        alert("No se pudo obtener tu ubicacion actual.");
    }

}

navigator.geolocation.watchPosition(success, error);

const puntos = [ {lat: 6.24626, lng: -75.59790, descripcion: "La PAMPA.", link: "../html/lapampa.html"},  
{lat: 6.24501, lng: -75.59501, descripcion: "Crepes & Waffles.", link: ""},  
{lat: 6.24079, lng: -75.59177, descripcion: "Hierba buena."},];

const puntos2 = [ {lat: 6.24630, lng: -75.59516, descripcion: "BBC cervecería."},
{lat: 6.24551, lng: -75.58919, descripcion: "La Kasica."},
{lat: 6.23919, lng: -75.59345, descripcion: "Encantigo Bar."},];

const puntos3 = [ {lat: 6.23919, lng: -75.59345, descripcion: "Iglesia upb."},
{lat: 6.24104, lng: -75.58433, descripcion: "El verbo divino."},
{lat: 6.23628, lng: -75.58035, descripcion: "Pueblito paisa."},];

const puntos4 = [ {lat: 6.24586, lng: -75.59342, descripcion: "Parque de laureles."},
{lat: 6.23577, lng: -75.60404, descripcion: "La villa."},
{lat: 6.23628, lng: -75.58035, descripcion: "Pueblito paisa."},];



let markers = [];
let markers2 = [];
let markers3 = [];
let markers4 = [];

let iconRestaurant = {
  iconUrl:"../image/iconRest.png",
  iconSize:[65,62]
}

let iconNocturna = {
  iconUrl:"../image/iconNoc.png",
  iconSize:[50,62]
}

let iconArquitectura = {
  iconUrl:"../image/iconArqui.png",
  iconSize:[60,62]
}

let iconCultura = {
  iconUrl:"../image/iconCul.png",
  iconSize:[60,62]
}

let myIcon1 = L.icon(iconRestaurant);
let myIcon2 = L.icon(iconNocturna);
let myIcon3 = L.icon(iconArquitectura);
let myIcon4 = L.icon(iconCultura);
 
let iconOptions1 = {
  icon:myIcon1
}

let iconOptions2 = {
  icon:myIcon2
}

let iconOptions3 = {
  icon:myIcon3
}

let iconOptions4 = {
  icon:myIcon4
}


var titulo = document.getElementById("titulo");
var header = document.getElementById("header");

function addMarkers() {
  for (let i = 0; i < puntos.length; i++) {
    const marker = L.marker([puntos[i].lat, puntos[i].lng], iconOptions1);
    marker.addTo(map);
    marker.bindPopup(`<b>${puntos[i].descripcion}</b><br><a href=${puntos[i].link}>Watch content</a>`);
    markers.push(marker);
  }

  map.fitBounds(L.featureGroup(markers).getBounds());
}

function removeMarkers() {
  for (let i = 0; i < markers.length; i++) {
    map.removeLayer(markers[i]);
  }

  markers.splice(0, markers.length);
  map.setView([6.2427, -75.5745], 13);
}

const toggleBtn = document.getElementById('btn-comida');
let markersVisible = false;

toggleBtn.addEventListener('click', () => {
  if(markersVisible) 
  {
    titulo.innerHTML = "MAP";
    header.style.background = "#012A3A";
    removeMarkers();
    markersVisible = false;
  } 
  else 
  {
    titulo.innerHTML = "FOOD";
    header.style.background = "linear-gradient(to right, #FF6409, #FFEF00)";
    addMarkers();
    markersVisible = true;
  }
});

function addMarkers2() {
  for (let i = 0; i < puntos2.length; i++) {
    const marker = L.marker([puntos2[i].lat, puntos2[i].lng], iconOptions2);
    marker.addTo(map);
    marker.bindPopup(`<b>${puntos2[i].descripcion}</b><br><a href=${puntos2[i].link}>Watch content</a>`);
    markers2.push(marker);
  }

  map.fitBounds(L.featureGroup(markers2).getBounds());
}

function removeMarkers2() {
  for (let i = 0; i < markers2.length; i++) {
    map.removeLayer(markers2[i]);
  }
  
  markers2.splice(0, markers2.length);
  map.setView([6.2427, -75.5745], 13); 
}

const toggleBtn2 = document.getElementById('btn-nocturna');
let markers2Visible = false;

toggleBtn2.addEventListener('click', () => {
  if(markers2Visible) 
  {
    titulo.innerHTML = "MAP";
    header.style.background = "#012A3A";
    removeMarkers2();
    markers2Visible = false;
  } 
  else 
  {
    titulo.innerHTML = "NIGHT LIFE";
    header.style.background = "linear-gradient(to right, #02FDDE, #B420FB)";
    addMarkers2();
    markers2Visible = true;
  }
});

function addMarkers3() {
  for (let i = 0; i < puntos3.length; i++) {
    const marker = L.marker([puntos3[i].lat, puntos3[i].lng], iconOptions3);
    marker.addTo(map);
    markers3.push(marker);
  }

  map.fitBounds(L.featureGroup(markers3).getBounds());
}

function removeMarkers3() {
  for (let i = 0; i < markers3.length; i++) {
    map.removeLayer(markers3[i]);
  }
  
  markers3.splice(0, markers3.length);
  map.setView([6.2427, -75.5745], 13); 
}

const toggleBtn3 = document.getElementById('btn-arquitectura');
let markers3Visible = false;

toggleBtn3.addEventListener('click', () => {
  if(markers3Visible) 
  {
    titulo.innerHTML = "MAP";
    header.style.background = "#012A3A";
    removeMarkers3();
    markers3Visible = false;
  } 
  else 
  {
    titulo.innerHTML = "ARCHITECTURE";
    header.style.background = "linear-gradient(to right, #97FF60, #12FFEC)";
    addMarkers3();
    markers3Visible = true;
  }
});

function addMarkers4() {
  for (let i = 0; i < puntos4.length; i++) {
    const marker = L.marker([puntos4[i].lat, puntos4[i].lng], iconOptions4);
    marker.bindPopup(`<b>${puntos4[i].descripcion}</b><br><a href=${puntos4[i].link}>Watch content</a>`);
    marker.addTo(map);
    markers4.push(marker);
  }

  map.fitBounds(L.featureGroup(markers4).getBounds());
}

function removeMarkers4() {
  for (let i = 0; i < markers4.length; i++) {
    map.removeLayer(markers4[i]);
  }
  
  markers4.splice(0, markers4.length);
  map.setView([6.2427, -75.5745], 13); 
}

const toggleBtn4 = document.getElementById('btn-cultura');
let markers4Visible = false;

toggleBtn4.addEventListener('click', () => {
  if(markers4Visible) 
  {
    titulo.innerHTML = "MAP";
    header.style.background = "#012A3A";
    removeMarkers4();
    markers4Visible = false;
  } 
  else 
  {
    titulo.innerHTML = "CULTURE";
    header.style.background = "linear-gradient(to right, #A3A0E9, #E56DBE)";
    addMarkers4();
    markers4Visible = true;
  }
});


