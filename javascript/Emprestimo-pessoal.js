const botao = document.querySelector("#botao-form");

window.sr = ScrollReveal({ reset: false});

let DadosCliente = {
    nome: '',
    valorEmprestimo:0 ,
    Parcelas: 0
}

botao.addEventListener("click", function(event){

    event.preventDefault()
    
    const valor = document.getElementById('input-form');

    const campo = valor.value ;

    if(valor.value !== '' && DadosCliente.nome === ''){

        DadosCliente.nome = valor.value;

        sr.reveal('.titulo-formulario', {
            rotate: {x: 80, y: 80, z: 80,},
            duration: 2000,
            delay: 1000,
           
            
        });

        sr.reveal('.input-form', {
            rotate: {x: 80, y: 80, z: 80,},
            duration: 2000,
            delay: 1000,
           
            
        });

        valor.value = '';

    }

    

    let tituloFormulario = document.getElementById("texto-titulo");

    if( DadosCliente.nome !== '' && DadosCliente.valorEmprestimo == 0 ){

        valor.placeholder = 'R$'

        tituloFormulario.innerText = "Qual Valor para Empréstimo ?"

        DadosCliente.valorEmprestimo = valor.value ;

        sr.reveal('.titulo-formulario', {
            rotate: {x: 0, y: 81, z: 0,},
            delay: 500
            
            
        });

        sr.reveal('.input-form', {
            rotate: {x: 0, y: 81, z: 0,},
            delay: 500
            
            
        });

        valor.value = '';

        console.log(DadosCliente.valorEmprestimo)
    }
    
    if( DadosCliente.valorEmprestimo != 0){
       
        

        valor.placeholder = 'Ex.: 5'

        tituloFormulario.innerText = " Em Quantas Vezes ?"

        

        if(valor.value <=10){

            DadosCliente.Parcelas = valor.value ;

            sr.reveal('.titulo-formulario', {
                rotate: {x: 0, y: 80, z: 0,},
                duration: 2700,
                
                
            });
    
            sr.reveal('.input-form', {
                rotate: {x: 0, y: 80, z: 0,},
                duration: 2700,
                
                
            });

            valor.value = '';

             console.log(DadosCliente.Parcelas)
        }
        else{
            alert('Digite um valor menor ou igua a 10 parcelas !!');

            valor.value = '';
        }
       
    }
    
    

    if(DadosCliente.nome !== '' && DadosCliente.valorEmprestimo != 0 && DadosCliente.Parcelas != 0  ){

        let result = document.getElementById("result"); 

        valor.value = '';

        const nome = DadosCliente.nome;
        const valorEmprestimo = DadosCliente.valorEmprestimo;
        const parcelas = DadosCliente.Parcelas;

        const taxaJuros = 0.0115 ;
        
        var EmprestimoComJuros = valorEmprestimo* taxaJuros ;

        var ValorParcelas = (valorEmprestimo/parcelas)+EmprestimoComJuros;

        var resultadoFinal = ValorParcelas*parcelas;

        sr.reveal('.titulo-formulario', {
            rotate: {x: 0, y: 80, z: 0,},
            duration: 2700,   
        });

        sr.reveal('.input-formulario', {
            rotate: {x: 0, y: 80, z: 0,},
            duration: 2700,   
        });

        sr.reveal('.input-formulario', {
            rotate: {x: 0, y: 80, z: 0,},
            duration: 2700,   
        });

        sr.reveal('.botao', {
            rotate: {x: 0, y: 80, z: 0,},
            duration: 2700,   
        });

        sr.reveal('.result', {
            rotate: {x: 0, y: 80, z: 0,},
            duration: 2700,
        });

        result.innerHTML = nome +' Seu Empréstimo de R$ ' + valorEmprestimo + " ficará em " + parcelas +'x'+" de R$ " + Math.round(ValorParcelas) + ' no valor final de R$ ' + Math.round(resultadoFinal);

       

        console.log(DadosCliente)
    }
    console.log(DadosCliente)
})
    







