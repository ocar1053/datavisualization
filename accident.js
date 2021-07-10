let map = L.map("map", {
	center: [25.033976, 121.5623502], // set center
	zoom: 16,
});
// to request maps
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
	foo: "bar",
	attribution:
		'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map);

//generate serach bar and serach result
//reference https://github.com/perliedman/leaflet-control-geocoder
var geocoder = L.Control.geocoder({
	defaultMarkGeocode: false,
})
	.on("markgeocode", function (e) {
		var bbox = e.geocode.bbox;

		// this poly normolly stands for a square
		var poly = L.polygon([
			bbox.getSouthEast(),
			bbox.getNorthEast(),
			bbox.getNorthWest(),
			bbox.getSouthWest(),
		]).addTo(map);
		map.fitBounds(poly.getBounds());
	})
	.addTo(map);
let markers = new L.MarkerClusterGroup(); // using MarkerCluster
let url = "jsonFile/data.json";
let xhr = new XMLHttpRequest();
xhr.open("GET", url); // request local data
xhr.responseType = "json";
xhr.send(null);
xhr.onload = function () {
	let data = xhr.response;
	for (let i = 0; i < data.length; i++) {
		let marker = L.marker([data[i].Y, data[i].X])
			// show something when click mark
			.bindPopup(
				"<h1> time:" +
					data[i].time +
					"</h1>" +
					"<h1> 交通事故類別:" +
					data[i].classs +
					"</h1>" +
					"<h1> site:" +
					data[i].site +
					"</h1>"
			)
			.openPopup();
		markers.addLayer(marker);
	}
	map.addLayer(markers);
};
