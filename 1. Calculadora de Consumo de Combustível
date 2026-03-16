let nome
let tipoDeCombustivel;
let distancia;
let litros;
let consumoMedio;
let consumoReal;

nome = prompt("Coloque seu nome: ");

while(!(tipoDeCombustivel == 1 || tipoDeCombustivel == 2 || tipoDeCombustivel == 3)) // Só para ele retornar a pergunta caso o numero não seja 1, 2 ou 3
{
tipoDeCombustivel = parseInt(prompt("Coloque o tipo de combustível 1 para Gasolina, 2 para Etanol, 3 para Disel: "));
}
while(!distancia) // Só para ele retornar a pergunta caso não seja numero
{
    distancia = parseFloat(prompt("Coloque a distancia percorrida em km: "));
}
while(!litros) // Só para ele retornar a pergunta caso não seja numero
{
    litros = parseFloat(prompt("Coloque a quantidade de litros de combustível usada: "));
}
switch (tipoDeCombustivel) // Determina o consumo médio
{
    case 1:
        consumoMedio = 12; //Gasolina
        break;
    case 2:
        consumoMedio = 8.5; //Etanol
        break;
    case 3:
        consumoMedio = 15; //Disel
        break;
}

consumoReal = distancia / litros;
let razao = consumoReal / consumoMedio;
let liberado;
switch(true)
{
    case razao >= 1.1:
        console.log("Excelente --- acima do esperado");
        liberado = true;
        break;
    case razao  >= 0.9:
        console.log("Regular --- dentro do esperado");
        liberado = true;
        break;
    case razao >= 0.7:
        console.log("Ruim --- abaixo do esperado");
        liberado = false;
        break;
    case razao < 0.7:
       console.log("Crítico --- veículo requer manutenção");
       liberado = false;
        break;
}
console.log(`Consumo esperado: ${consumoMedio.toFixed(2)} | consumo real: ${consumoReal.toFixed(2)}`);
liberado ? console.log("LIBERADO PARA FROTA") : console.log("ENCAMINHADO PARA REVISÃO");

    
    
