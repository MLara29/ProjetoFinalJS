// menu barra de NAV
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

// Whatsapp
function exibirPopUp() {
    alert("O WhatsApp está inativo no momento.");
}

const whatsappButton = document.getElementById('whatsappButton');
whatsappButton.addEventListener('click', exibirPopUp);

// Logica de financiamento
function simularFinanciamento() {
    const emprestimo = parseFloat(document.getElementById("Emprestimo").value);
    const parcelas = parseInt(document.getElementById("Parcela").value);
    const entrada = parseFloat(document.getElementById("Entrada").value);
    const emprestimoFinal = emprestimo - entrada;

    let taxa;
    const tipoCreditoImobiliario = document.getElementById("Imobiliario").checked;
    if (tipoCreditoImobiliario) {
        taxa = 0.85; 
    } else {
        taxa = 1.5; 
    }

   
    const resultado = calcularPrestacoes(emprestimoFinal, taxa, parcelas);

    exibirResultadoModal(resultado);
}

function exibirResultadoModal(resultado) {
    const tabelaResultado = document.getElementById("tabelaResultado").getElementsByTagName('tbody')[0];
    tabelaResultado.innerHTML = "";

    resultado.forEach((item, index) => {
        const newRowHTML = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.prestacao.toFixed(2)}</td>
                <td>${item.juros.toFixed(2)}</td>
                <td>${item.amortizacao.toFixed(2)}</td>
                <td>${item.saldoDevedor.toFixed(2)}</td>
            </tr>
        `;
        tabelaResultado.insertAdjacentHTML('beforeend', newRowHTML);
    });

    $('#modalFinanciamento').modal('show');
}

function calcularPrestacoes(emprestimoFinal, taxa, parcelas) {
    taxa = taxa / 100;

    let prestacoes = [];

    let prestacao = (emprestimoFinal * taxa) / (1 - Math.pow(1 + taxa, -parcelas));

    for (let i = 0; i < parcelas; i++) {
        let juros = emprestimoFinal * taxa;
        let amortizacao = prestacao - juros;

        prestacoes.push({
            prestacao: prestacao,
            juros: juros,
            amortizacao: amortizacao,
            saldoDevedor: emprestimoFinal - amortizacao
        });

        emprestimoFinal -= amortizacao;
    }

    return prestacoes;
}

document.querySelector('.simulador-button').addEventListener('click', simularFinanciamento);

//Logica de pesquisa
const elementos = [
    { "tipo": "link", "texto": "Inicio", "url": "/index.html" },
    { "tipo": "link", "texto": "Usuário", "url": "/usuario.html" },
    { "tipo": "link", "texto": "Empresas", "url": "/empresas.html" },
    { "tipo": "link", "texto": "Beneficiarios", "url": "/beneficiarios.html" },
    { "tipo": "link", "texto": "Acessar", "url": "/html/Acessar.html" },
    { "tipo": "link", "texto": "Política de Privacidade", "url": "/html/Politica.html" },
    { "tipo": "link", "texto": "Termos e Condições", "url": "/html/Termos.html" },
    { "tipo": "botao", "texto": "FGTS", "funcao": "redirecionarPagina('/html/fgts.html')", "id": "card1-button" },
    { "tipo": "botao", "texto": "Antecipe seu Beneficio", "funcao": null, "id": "card2-button" },
    { "tipo": "botao", "texto": "Emprestimo Consignado", "funcao": "redirecionarPagina('/html/emprestimo.html')", "id": "card3-button" },
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




