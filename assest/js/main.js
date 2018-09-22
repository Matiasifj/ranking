let elementList = document.querySelectorAll(".fa-thumbs-up")

elementList.forEach(function(element){
	element.addEventListener('click',function(){
	 
		for(e=0;e<element.parentElement.children.length;e++)
		{ 
			element.parentElement.children[e].classList.remove("fas");
			element.parentElement.children[e].classList.add("far");
			element.parentElement.children[e].classList.remove("active");
		}

		var selectedIndex = parseInt(element.dataset.index)
		for (e = 0; e < element.parentElement.children.length; e++) {
			if (e != selectedIndex) {
				element.parentElement.children[e].classList.add("fas");
				element.parentElement.children[e].classList.add("active");
			} else
				break;
		}
		// MUESTRA NOTIFICACION
		alert("¡Gracias por tu votación!");
	});

});


let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
	close.addEventListener('click', function(ev){
		ev.preventDefault();
		content.classList.remove("animated");
		content.classList.remove("zoomIn");
		content.classList.add("animated");
		content.classList.add("zoomOut");
		setTimeout(() => {
			location.href="../index.html";
		},100);
	})
});