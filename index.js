// menu barra de NAV//

openMenu.addEventListener('click', () => {

	menu.style.display = "flex"

	menu.style.right = (menu.offsetWidth * -1) + 'px'


	setTimeout(()=> {

		menu.style.opacity = '1'

		menu.style.right = "0"

		openMenu.style.display = 'none'
	}, 10);
})

closeMenu.addEventListener('click', () => {

	menu.style.opacity = '0'

	menu.style.right = (menu.offsetWidth * -1) + 'px'

	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})


const lists = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');

function ativaMenu() {
    for (let list of lists) {
        list.classList.remove('ativo');
    }
    this.classList.add('ativo');
    const index = Array.from(lists).indexOf(this);
    const position = index * 70; 
    indicator.style.transform = `translateX(${position}px)`;
}

for (let list of lists) {
    list.addEventListener('mouseenter', ativaMenu); 
}

//Desativa As redes do footer//
window.onload = function() {
	desativarLinks();
};

function desativarLinks() {
	var links = document.querySelectorAll("ul li a[href^='https://facebook.com/exemplo'], ul li a[href^='https://twitter.com/exemplo'], ul li a[href^='https://linkedin.com/exemplo']");

	links.forEach(function(link) {
		link.removeAttribute("href");
		link.style.pointerEvents = "none";
	});
}