let urll = "../jsonFile/rank.json";
let requst = new XMLHttpRequest();
requst.open("GET", urll); //resquest local data
requst.responseType = "json";
requst.send();
requst.onload = function () {
	let datarespose = requst.response;

	// to show top ten data in leftside
	for (let k = 0; k < datarespose.length; k++) {
		$("#listadd").append(
			`<li class="ui-li-static ui-body-inherit" style="
			text-align: center";>${datarespose[k].site}</li>`
		);
	}
};
