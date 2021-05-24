//searchLayer is a L.LayerGroup contains searched markers
let urll = "rank.json";
let requst = new XMLHttpRequest();
requst.open("GET", urll);
requst.responseType = "json";
requst.send(null);
requst.onload = function () {
	let datarespose = requst.response;
	for (let k = 0; k < datarespose.length; k++) {
		console.log(datarespose);
		document.getElementById("rank").innerHTML +=
			"<h2>" +
			datarespose[k].rank +
			". " +
			"  " +
			datarespose[k].site +
			"</h2>";
	}
};
