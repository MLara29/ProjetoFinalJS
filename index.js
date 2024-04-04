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

const simulacaoButton = document.getElementById('simulacaoButton');
if (simulacaoButton) {
    simulacaoButton.addEventListener('click', redirecionarPagina);
}

function exibirPopUp() {
    alert("O WhatsApp está inativo no momento.");
}

const whatsappButton = document.getElementById('whatsappButton');
whatsappButton.addEventListener('click', exibirPopUp);

function redirecionarPagina() {
    window.location.href = "/html/Financ.html";
}

const elementos = [
    { "tipo": "link", "texto": "Inicio", "url": "/inicio.html" },
    { "tipo": "link", "texto": "Usuário", "url": "/usuario.html" },
    { "tipo": "link", "texto": "Empresas", "url": "/empresas.html" },
    { "tipo": "link", "texto": "Beneficiarios", "url": "/beneficiarios.html" },
    { "tipo": "link", "texto": "Acessar", "url": "/html/Acessar.html" },
    { "tipo": "link", "texto": "Página Inicial", "url": "/index.html" },
    { "tipo": "link", "texto": "Política de Privacidade", "url": "/html/Politica.html" },
    { "tipo": "link", "texto": "Termos e Condições", "url": "/html/Termos.html" },
    { "tipo": "botao", "texto": "Solicite Agora", "funcao": redirecionarPagina, "id": "card1-button" },
    { "tipo": "botao", "texto": "Antecipe Agora", "funcao": null, "id": "card2-button" },
    { "tipo": "botao", "texto": "Solicite Aqui", "funcao": redirecionarPagina, "id": "card3-button" },
    { "tipo": "botao", "texto": "Peça o seu Agora", "funcao": null, "id": "card4-button" }
];

const searchInput = document.getElementById('search-input');
const searchContainer = document.querySelector('.search-container');
let searchResultsContainer; 

searchInput.addEventListener('input', function(event) {
    const inputValue = event.target.value.trim().toLowerCase(); 
    
    const resultados = elementos.filter(elemento => elemento.texto.toLowerCase().includes(inputValue));
    
    const previousResults = document.querySelectorAll('.search-result');
    previousResults.forEach(result => result.remove());

    if (searchResultsContainer) {
        searchResultsContainer.remove();
    }
    
    searchResultsContainer = document.createElement('div');
    searchResultsContainer.classList.add('search-results-container'); 

    resultados.forEach(elemento => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result');

        if (elemento.tipo === 'link') {
            const anchor = document.createElement('a');
            anchor.setAttribute('href', elemento.url);
            anchor.textContent = elemento.texto;
            resultItem.appendChild(anchor);
        } else if (elemento.tipo === 'botao') {
            const button = document.createElement('button');
            button.textContent = ajustarTexto(elemento.texto); 
            button.id = elemento.id;
            button.style.border = 'none'; 
            button.style.background = 'none'; 
            button.style.cursor = 'pointer'; 
            if (elemento.funcao) {
                button.addEventListener('click', elemento.funcao);
            }
            resultItem.appendChild(button);
        }

        searchResultsContainer.appendChild(resultItem); 
    });

    if (resultados.length > 0) {
        searchContainer.appendChild(searchResultsContainer);
    }
});

function ajustarTexto(titulo) {
    if (titulo.toLowerCase().includes('solicite aqui')) {
        return 'Emprestimo consignado';
    }
    if (titulo.toLowerCase().includes('antecipe agora')) {
        return 'Antecipe seu beneficio';
    }
    if (titulo.toLowerCase().includes('peça o seu agora')) {
        return 'Solicite agora seu cartão';
    }
	if (titulo.toLowerCase().includes('solicite agora')) {
        return 'FGTS';
    }
    return titulo;
}

localStorage.setItem('elementos', JSON.stringify(elementos));

const elementosArmazenados = JSON.parse(localStorage.getItem('elementos'));
