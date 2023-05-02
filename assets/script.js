const SLIDES = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span> avec découpe laser sur mesure</span>"
	}
]

// On récupère les classes pour les flèches

let arrowleft  = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let index 		= 0;

// On ajoute les bullet point au projet 

let bulletPointContainer = document.querySelector('.dots');

for (let i = 0; i < slides.length; i++) {
	
	let bulletPoint = document.createElement('span');
	bulletPointContainer.appendChild(bulletPoint);
	bulletPoint.classList.add('dot');
}

// Récupération de la liste créer et attribution du bullet point selectionné

let elementList = document.getElementsByClassName('dot');
elementList[index].classList.add('dot_selected');

// On récupère la div qui contien les tagLine et les images

let NewTaglineContainer = document.querySelector('#banner');
let NewTagline 		    = NewTaglineContainer.querySelector('p');
let newImage 		    = document.querySelector('.banner-img');


// On ajoute les événement au click

arrow_left.addEventListener('click', () => {

	//console.log("Clique gauche effectué");

	if (index === 0) {
		index = 3;
		elementList[index].classList.add('dot_selected');
		elementList[0].classList.remove('dot_selected');
		newImage.src 		 = slides[index].image;
		NewTagline.innerHTML = slides[index].tagLine;
	}

	else {

		index --; 
		newImage.src   		 = slides[index].image;
		NewTagline.innerHTML = slides[index].tagLine;
		elementList[index].classList.add('dot_selected');
		elementList[index + 1].classList.remove('dot_selected');
		
	}
 })

arrow_right.addEventListener('click', () => {
	
	//console.log("Clique droit effectué");

	if (index === 3) {

		index = 0;
		elementList[index].classList.add('dot_selected');
		elementList[3].classList.remove('dot_selected');
		newImage.src 		 = slides[index].image;
		NewTagline.innerHTML = slides[index].tagLine;
	}

	else {
		
		index ++; 
		newImage.src 		 = slides[index].image;
		NewTagline.innerHTML = slides[index].tagLine;
		elementList[index].classList.add('dot_selected');
		elementList[index - 1].classList.remove('dot_selected');
		
	}
})



	

