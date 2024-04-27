// menu barra de NAV//
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

// Redirecionar para o Simulador
const simulacaoButton = document.getElementById('simulacaoButton');
if (simulacaoButton) {
    simulacaoButton.addEventListener('click', redirecionarPagina);
}

function redirecionarPagina() {
    window.location.href = "/html/Financ.html";
}

// Whatsapp
function exibirPopUp() {
    alert("O WhatsApp está inativo no momento.");
}

const whatsappButton = document.getElementById('whatsappButton');
whatsappButton.addEventListener('click', exibirPopUp);


//Logica de pesquisa
const elementos = [
    { "tipo": "link", "texto": "Inicio", "url": "./index.html" },
    { "tipo": "link", "texto": "Usuário", "url": "./html/Login.html" },
    { "tipo": "link", "texto": "Empresas", "url": "./html/empresas.html" },
    { "tipo": "link", "texto": "Beneficiarios", "url": "./html/beneficiarios.html" },
    { "tipo": "link", "texto": "Acessar", "url": "./html/Acessar.html" },
    { "tipo": "link", "texto": "Política de Privacidade", "url": "./html/Politica.html" },
    { "tipo": "link", "texto": "Termos e Condições", "url": "./html/Termos.html" },
    { "tipo": "botao", "texto": "FGTS", "funcao": "redirecionarPagina('./html/fgts.html')", "id": "card1-button" },
    { "tipo": "botao", "texto": "Emprestimo Pessoal", "funcao": "redirecionarPagina('./html/Emprestimo-pessoal.html')", "id": "card2-button" },
    { "tipo": "botao", "texto": "Emprestimo Consignado", "funcao": "redirecionarPagina('./html/emprestimo.html')", "id": "card3-button" },
    { "tipo": "botao", "texto": "Solicite agora seu cartão", "funcao": null, "id": "card4-button" }
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
            button.textContent = elemento.texto; 
            button.id = elemento.id;
            button.style.border = 'none'; 
            button.style.background = 'none'; 
            button.style.cursor = 'pointer'; 
            if (elemento.funcao) {
                button.addEventListener('click', function() { eval(elemento.funcao); });
            }
            resultItem.appendChild(button);
        }

        searchResultsContainer.appendChild(resultItem); 
    });

    if (resultados.length > 0) {
        searchContainer.appendChild(searchResultsContainer);
    }
});

localStorage.setItem('elementos', JSON.stringify(elementos));

const elementosArmazenados = JSON.parse(localStorage.getItem('elementos'));

function redirecionarPagina(url) {
    window.location.href = url;
}

const style = document.createElement('style');
style.textContent = `
    .search-results-container {
        font-family: "Roboto", sans-serif;
        font-size: 15px; 
    }
    .search-result {
        text-align: left; 
        padding-left: 0; 
    }`
;
document.head.append(style);