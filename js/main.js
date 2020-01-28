var list = document.querySelectorAll('.content li');//Selecciona todas las listas
var caja = [//Seleccionando todas las cajas en donde se añadirá información
	document.querySelector('.caja-1'), 
	document.querySelector('.caja-2'),
	document.querySelector('.caja-3'),
	document.querySelector('.caja-4')
];
list.forEach(function(elem){//Recorre todas las listas
	/*Mouse entra*/
	elem.addEventListener('mouseenter', addAnimation);//De cada lista se añade la acción
	function addAnimation(){
		var data = [//Datos obtenidos del html
			this.dataset.text1,
			this.dataset.img1,
			this.dataset.img2,
			this.dataset.text2
		];
		for(i = 0; i <= 3; i++){
			caja[i].classList.remove('fadeOut');
			if(i == 1 || i == 2) {
				caja[i].style.background = 'url('+data[i]+') center';//Añade imagen
			} else {
				caja[i].innerHTML = data[i];//añade texto
			}
			caja[i].classList.add('animated', 'fadeIn','bg-success','p-5','delay' + i);//añade clase
		}
	}
	/*===========*/
	/*Mouse sale*/
	elem.addEventListener('mouseout',removeAnimation);
	function removeAnimation(){ 
		for(i = 0; i <= 3; i++){
			caja[i].classList.remove('fadeIn');
			caja[i].classList.add('fadeOut');
		}
	}
	/*==========*/
});