// Zoom In & Out JS
function zoomIn(event) {
	event.target.style.transform = "scale(1.05)";
	event.target.style.zIndex = 1;
	event.target.style.transition = "all 0.5s";
}
function zoomOut(event) {
	event.target.style.transform = "scale(1)";
	event.target.style.zIndex = 0;
	event.target.style.transition = "all 0.5s";
}