let map = L.map("map", {
	center: [25.033976, 121.5623502],
	zoom: 16,
});
// to request maps
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
	foo: "bar",
	attribution:
		'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map);
var geocoder = L.Control.geocoder({
	defaultMarkGeocode: false,
})
	.on("markgeocode", function (e) {
		var bbox = e.geocode.bbox;
		var poly = L.polygon([
			bbox.getSouthEast(),
			bbox.getNorthEast(),
			bbox.getNorthWest(),
			bbox.getSouthWest(),
		]).addTo(map);
		map.fitBounds(poly.getBounds());
	})
	.addTo(map);
let markers = new L.MarkerClusterGroup();
let url = "data.json";
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send(null);
xhr.onload = function () {
	let data = xhr.response;
	for (let i = 0; i < data.length; i++) {
		let marker = L.marker([data[i].Y, data[i].X])
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

/* Set the width of the side navigation to 250px */
