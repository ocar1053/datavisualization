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
			$("#listadd").append(
				`<li  id="${k}list" class="ui-li-static ui-body-inherit" style="
			text-align: center";><button style="
			border-color: #f0f8ff73;;
			background: transparent;
		">${datarespose[k].site}</button></li>`
			);
			$(`#${k}list`).click(function (e) {
				var target = document.getElementsByClassName(
					"leaflet-control-geocoder leaflet-bar leaflet-control"
				)[0];
				target.className =
					"leaflet-control-geocoder leaflet-bar leaflet-control leaflet-control-geocoder-expanded";
				$.ajax({
					url: "search.js",
					success: function (result) {
						textinput = datarespose[k].site;
					},
				});
			});
		}
	};
});
