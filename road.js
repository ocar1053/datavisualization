$(document).ready(function () {
	var isClick = true;
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
				if (isClick) {
					isClick = false;
					//事件
					document.getElementsByClassName(
						"leaflet-control-geocoder leaflet-bar leaflet-control"
					)[0].className =
						"leaflet-control-geocoder leaflet-bar leaflet-control leaflet-control-geocoder-expanded ";
					let t = document
						.getElementsByClassName(
							"leaflet-control-geocoder-form"
						)[0]
						.getElementsByTagName("input")[0];
					let targetValue = (document
						.getElementsByClassName(
							"leaflet-control-geocoder-form"
						)[0]
						.getElementsByTagName(
							"input"
						)[0].value = `${datarespose[k].site}`);

					let event = document.createEvent("Event");
					event.initEvent("keydown", true, false);
					event = Object.assign(event, {
						ctrlKey: false,
						metaKey: false,
						altKey: false,
						which: 13,
						keyCode: 13,
						key: "Enter",
						code: "Enter",
					});
					t.focus();
					t.dispatchEvent(event);
					let a = document
						.getElementsByClassName(
							"leaflet-control-geocoder-alternatives leaflet-control-geocoder-alternatives-minimized"
						)[0]
						.getElementsByTagName("li")[0];
					setTimeout(function () {
						isClick = true;
					}, 500);
				}
			});
		}
	};
});
