const botao = document.querySelector("#botao-form");

let DadosCliente = {
    nome: '',
    valorEmprestimo: 0,
    Parcelas: 0
}

botao.addEventListener("click", function(event){

    event.preventDefault()
    
    const valor = document.getElementById('input-form');

    const campo = valor.value ;

    if(valor.value !== '' && DadosCliente.nome !== ''){

        DadosCliente.nome = valor.value;

    }

   

    let tituloFormulario = document.getElementById("texto-titulo");

    if(valor.value !== '' && DadosCliente.valorEmprestimo !== '' ){
       
        valor.value = '';

        valor.placeholder = 'R$'

        tituloFormulario.innerText = "Qual Valor para Empréstimo ?"

        DadosCliente.valorEmprestimo = valor.value ;

        console.log(DadosCliente.valorEmprestimo)
    }
    
    if(valor.value != '' && DadosCliente.Parcelas !== ''){
       
        valor.value = '';

        valor.placeholder = 'Ex.: 5'

        tituloFormulario.innerText = " Em Quantas Vezes ?"

        DadosCliente.Parcelas = valor.value ;

        console.log(DadosCliente.Parcelas)
    }
    
    

    if(valor.value != '' ){

        let result = document.getElementById("result"); 

        valor.value = '';

        const nome = DadosCliente.nome;
        const valorEmprestimo = DadosCliente.valorEmprestimo;
        const parcelas = DadosCliente.Parcelas;

        result.innerHTML = nome +'Seu Empréstimo de ' + valorEmprestimo + "ficará em" + parcelas +'x'+"R$ 500,00";


    }
    console.log(campo)
})
    







