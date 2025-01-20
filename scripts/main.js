document.addEventListener("DOMContentLoaded", 
	function getStats(event) {
		// TODO: Fetch using App Store Connect API.
		var count = 60;
		const stats = document.getElementById("stats");
		if (count > 50) {
			stats.querySelector('h2').innerHTML = count;
		} else {
			stats.style.display = "none";
		}
	}
);

document.addEventListener("DOMContentLoaded", 
	function insertYear(event) {
		const date = new Date();
		const copyrights = document
								.getElementById("copyrights")
								.querySelector("small")
								.querySelector("span");
		copyrights.innerHTML = "&copy; " + date.getFullYear() + " KartStopper";
	}
);