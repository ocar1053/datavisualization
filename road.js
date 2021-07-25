$(document).ready(function () {
	let urll = "jsonFile/rank.json";
	let requst = new XMLHttpRequest();
	requst.open("GET", urll); //resquest local data
	requst.responseType = "json";
	requst.send(null);
	requst.onload = function () {
		let datarespose = requst.response;

		// to show top ten data in leftside
		for (let k = 0; k < datarespose.length; k++) {
			$(".list-group").append(
				`<button id="btn${k}" style="
				text-align: center;" type="button" class="list-group-item list-group-item-action"> ${datarespose[k].site}</button>`
			);

			$(`#btn${k}`).click(function (e) {
				document.getElementsByClassName(
					"leaflet-control-geocoder leaflet-bar leaflet-control"
				)[0].className =
					"leaflet-control-geocoder leaflet-bar leaflet-control leaflet-control-geocoder-expanded ";
				document
					.getElementsByClassName("leaflet-control-geocoder-form")[0]
					.getElementsByTagName(
						"input"
					)[0].value = `${datarespose[k].site}`;
			});
		}
	};
});
