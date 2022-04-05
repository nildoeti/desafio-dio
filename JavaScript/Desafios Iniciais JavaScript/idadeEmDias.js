/*
    Desafio
    Você terá o desafio de ler um valor inteiro correspondente à idade de uma
    pessoa em dias e informe-a em anos, meses e dias

    Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e
    todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que
    permite 12 meses e alguns dias, como 360, 363 ou 364.

    Entrada
    O arquivo de entrada contém um valor inteiro.

    Saída
    Imprima a saída conforme exemplo fornecido.


    Algoritimo proposto

    let totalDeDias = parseInt(gets());
    let qtdAnos, qtdMeses;

    qtdAnos = parseInt(          );
    totalDeDias= totalDeDias %       ;

    qtdMeses= parseInt(             );
    totalDeDias=                            ;

    let resultado = (qtdAnos + " ano(s) " + '\n' +
    qtdMeses +" mes(es)" + '\n' +
    totalDeDias + " dia(s)");

    print(resultado);


*/



let qttDays = parseInt(gets());
let qttYears;
let qttMonths;

qttYears = Math.round(qttDays / 365); // encontra a qtde de anos
qttDays = qttDays % 365; // encontra quantos dias sobram e atualiza a variável do total de dias com os dias que sobraram
qttMonths = Math.round(qttDays / 30); // encontra a qtde de meses
qttDays = qttDays % 30; // verifica quantos dias sobram.

// saida
let result = (
    qttYears + " ano(s) " + '\n' +
    qttMonths + " mes(es)" + '\n' +
    qttDays + " dia(s)"
);



console.log(result);
