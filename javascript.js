window.onload = function() {

	let barrinhas = document.getElementById("tres_barrinhas");
	window.onscroll=function(){
		//controla a transparencia do menu
		barrinhas.classList.toggle("fundo_visivel",
			document.body.scrollTop >= window.innerHeight -90);
	}

	let menu = document.getElementById("menu");
	let links = menu.children;
	for(let i = 0; i < links.length; i++){
		links[i].onclick=function(){
			if (barrinhas.innerHTML == "≡"){
				barrinhas.innerHTML = "×";
				menu.classList.toggle("menu_aberto");
			}else{
				barrinhas.innerHTML = "≡";
				menu.classList.toggle("menu_aberto");
			}
		}
	}

};