let urll = "jsonFile/rank.json";
let requst = new XMLHttpRequest();
requst.open("GET", urll); //resquest local data
requst.responseType = "json";
requst.send(null);
requst.onload = function () {
	let datarespose = requst.response;

	// to show top ten data in leftside
	for (let k = 0; k < datarespose.length; k++) {
		console.log(datarespose);
		document.getElementById("rank").innerHTML +=
			"<h3>" +
			datarespose[k].rank +
			". " +
			"  " +
			datarespose[k].site +
			"</h3>";
	}
};
