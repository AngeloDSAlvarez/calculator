var contaAtual = ''
var ultimaConta = ''

function enviarDados (x){
    contaAtual = contaAtual + x

    document.getElementById("visorNumeros").value = contaAtual
}

function resolver (){
    ultimaConta = contaAtual
    contaAtual = eval(contaAtual)
    document.getElementById("visorNumeros").value = contaAtual
    adicionarLinha()
}

function limparContaAtual () {
    contaAtual = ''
    document.getElementById("visorNumeros").value = '0'
}
function apagarUltima (){
    contaAtual = contaAtual.slice(0,-1)
    document.getElementById("visorNumeros").value = contaAtual
}

function mostrarHistorico () {
    let containerHistorico = document.getElementById("containerHistorico")
    if (containerHistorico.style.overflow == 'visible'){
        containerHistorico.style.overflow = 'hidden'
    }else{
        containerHistorico.style.overflow = 'visible'
    }
}

function adicionarLinha(){
    var tabela = document.getElementById("historico");
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    celula1.innerHTML = ultimaConta + ' = ' + contaAtual
}