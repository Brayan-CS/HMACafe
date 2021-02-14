var mymap = L.map('mapid').setView([4.7, -74.1], 11);

var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([4.624, -74.126]).addTo(mymap);
marker.bindPopup("<b> Comercializadora HMA</b><br>Tienda 1").closePopup();
var marker = L.marker([4.664, -74.116]).addTo(mymap);
marker.bindPopup("<b> Comercializadora HMA</b><br>Tienda 2").closePopup();
var marker = L.marker([4.714, -74.068]).addTo(mymap);
marker.bindPopup("<b> Comercializadora HMA</b><br>Tienda 3").closePopup();

