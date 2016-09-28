if (typeof window.getComputedStyle(document.body).backgroundBlendMode === 'undefined') {
	document.documentElement.className += " background-blend-mode-no";
}
if (typeof window.getComputedStyle(document.body).mixBlendMode === 'undefined') {
	document.documentElement.className += " mix-blend-mode-no";
}