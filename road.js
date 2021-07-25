$(document).ready(function () {
	function copyToClipboard(text, k) {
		var dummy = document.createElement("textarea");
		// to avoid breaking orgain page when copying more words
		// cant copy when adding below this code
		// dummy.style.display = 'none'
		document.body.appendChild(dummy);
		//Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
		dummy.value = text;
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
	}
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
			text-align: center";>${datarespose[k].site}<button id="btn${k}" class="btn"><i class="far fa-copy"></i></button></li>`
			);

			let listText = document.getElementById(`${k}list`);
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

				copyToClipboard(`${datarespose[k].site}`, k);
			});
		}
	};
});
