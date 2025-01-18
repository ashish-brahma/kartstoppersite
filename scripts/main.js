document.addEventListener("DOMContentLoaded", () => {
	// TODO: Fetch using App Store Connect API.
	var count = 60;
	const stats = document.getElementById("stats");
	if (count > 50) {
		stats.querySelector('h2').innerHTML = count;
	} else {
		stats.style.display = "none";
	}
});