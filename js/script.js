'use strict';

let somaMussarela = 0;
let somaCalabresa = 0;
let somaFrango = 0;
let vendaMussarela = 0.00;
let vendaCalabresa = 0.00;
let vendaFrango = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos 
btnVendas.addEventListener('click', (event) => {
    if(document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 38.00;
        document.getElementById('qtdMussarela').innerText = somaMussarela;
        document.getElementById('vlrMussarela').innerText = 'R$ ' + vendaMussarela.toFixed(2);
    }else if(document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 42.00;
        document.getElementById('qtdCalabresa').innerText = somaCalabresa;
        document.getElementById('vlrCalabresa').innerText = 'R$ ' + vendaCalabresa.toFixed(2);
    } else if(document.getElementById('frango').checked) {
        somaFrango = somaFrango + 1;
        vendaFrango = vendaFrango + 48.00;
        document.getElementById('qtdFrango').innerText = somaFrango;
        document.getElementById('vlrFrango').innerText = 'R$ ' + vendaFrango.toFixed(2);
    }

    let qtdTotal = somaMussarela + somaCalabresa + somaFrango;
    let vlrTotal = vendaMussarela + vendaCalabresa + vendaFrango;

    document.getElementById('qtdTotal').innerText = qtdTotal;
    document.getElementById('vlrTotal').innerText = 'R$ ' + vlrTotal.toFixed(2);
}, false)

btnEstorno.addEventListener('click', (event) => {
    if(document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 38.00;

        if(somaMussarela < 0) {
            somaMussarela = 0;
            vendaMussarela = 0;
        }

        document.getElementById('qtdMussarela').innerText = somaMussarela;
        document.getElementById('vlrMussarela').innerText = 'R$ ' + vendaMussarela.toFixed(2);
    }else if(document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 42.00;

        if(somaCalabresa < 0) {
            somaCalabresa = 0;
            vendaCalabresa = 0;
        }

        document.getElementById('qtdCalabresa').innerText = somaCalabresa;
        document.getElementById('vlrCalabresa').innerText = 'R$ ' + vendaCalabresa.toFixed(2);
    } else if(document.getElementById('frango').checked) {
        somaFrango = somaFrango - 1;
        vendaFrango = vendaFrango - 48.00;
        
        if(somaFrango < 0) {
            somaFrango = 0;
            vendaFrango = 0;
        }
        
        document.getElementById('qtdFrango').innerText = somaFrango;
        document.getElementById('vlrFrango').innerText = 'R$ ' + vendaFrango.toFixed(2);
    }

    let qtdTotal = somaMussarela + somaCalabresa + somaFrango;
    let vlrTotal = vendaMussarela + vendaCalabresa + vendaFrango;

    document.getElementById('qtdTotal').innerText = qtdTotal;
    document.getElementById('vlrTotal').innerText = 'R$ ' + vlrTotal.toFixed(2);
}, false)

btnPlanilha.addEventListener('click', (event) => {
    TableToExcel.convert(document.getElementById('table'));
})
