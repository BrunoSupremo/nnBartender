$(document).ready(function(){

	//controla a transparencia da barra no topo de acordo com o movimento da tela
	window.onscroll=function(){
		if( document.querySelectorAll("#menu")[0].classList.contains("menu_aberto") ){
			document.querySelectorAll(".tres_barrinhas")[0].classList.toggle("fixar_no_topo",
				document.body.scrollTop >= 29);
		}else{
			document.querySelectorAll(".tres_barrinhas")[0].classList.toggle("fixar_no_topo",
				document.body.scrollTop >= window.innerHeight);
			document.querySelectorAll("#barra_no_topo")[0].classList.toggle("visivel",
				document.body.scrollTop >= window.innerHeight);
		}
	}
	//fim do controle de transparencia


	//clicou nas barrinhas ou em um link dentro do menu
	for(i=0; i<document.querySelectorAll(".tres_barrinhas, nav a").length; i++){
		document.querySelectorAll(".tres_barrinhas, nav a")[i].onclick=function(){
			document.querySelectorAll(".tres_barrinhas")[0].classList.toggle("em_x");
			if( document.querySelectorAll("#menu")[0].classList.toggle("menu_aberto") ){
				document.querySelectorAll("#barra_no_topo")[0].classList.remove("visivel");
			}else{
				window.onscroll();
			}
		}
	}
	//fim do clique das barrinhas


	// inicio scroll suave
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				//animate() é jquery
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	// fim scroll suave


	//clicou nas fotos da galeria modal
	for(i=0; i<document.querySelectorAll("#galeria_modal .imagem_galeria").length; i++){
		document.querySelectorAll("#galeria_modal .imagem_galeria")[i].onclick=function(){
			var div = document.createElement("div");
			div.classList.add("javascript");
			this.appendChild(div);
			div.onclick=function(){
				this.parentNode.removeChild(this);
				event.stopPropagation(); //pra evitar clicar aqui e ativar o click do pai junto
			}
		}
	}
	//fim do clique nas fotos
});