var acc = document.getElementsByClassName("accordion");
var i;

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		for (let j = 0; j < acc.length; j++) {
			
			if (j != i) {
				acc[j].nextElementSibling.style.maxHeight = null;
				acc[j].classList.remove("active");
			}
		}

		this.classList.toggle("active");
		var panel = this.nextElementSibling;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
