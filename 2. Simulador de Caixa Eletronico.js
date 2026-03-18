let nomeCorrentista = prompt("Qual o seu nome? ")
let tipoConta = parseInt(prompt("Qual o seu tipo de conta? 1- Conta corrente, 2- Conta Poupanca, 3- Conta Salario "))
let saldoAtual = parseFloat(prompt("Qual seu saldo atual na conta? "))
let operacao = parseInt(prompt("Qual a operacao desejada? 1- Saque, 2- Deposito, 3- Consultar saldo "))
let valorOperacao = operacao !== 3 ? parseFloat(prompt("Qual o valor da operacao? ")) : true ;
let limiteSaque


switch(tipoConta)
{
    case 1:
        limiteSaque = 3000
    break;
    case 2:
        limiteSaque = 1500
    break;
    case 3:
        limiteSaque = 2000
    break;
    default:
    console.log("Tipo de conta invalido.")
    break;
}

switch(operacao)
{
    case 1:
        operacao = "Saque"
    break;
    case 2:
        operacao = "Deposito"
    break;
    case 3:
        operacao = "Consultar Saldo"
    break;
    default:
    console.log("Operacao invalida.")
    break;
}

switch(true)
{
    case (operacao == "Saque" && valorOperacao <= saldoAtual && valorOperacao > limiteSaque):
        console.log("Saque negado --- valor acima do limite diario")
    break;
    
    case (operacao == "Saque" && valorOperacao > saldoAtual):
        console.log("Saque negado --- saldo insuficiente")
    break;
    
    case (operacao == "Saque" && valorOperacao <= saldoAtual && valorOperacao <= limiteSaque):
        saldoAtual = saldoAtual - valorOperacao
        console.log("Saque realizado com sucesso.")
    break;
    
    case (operacao == "Deposito"):
        saldoAtual = saldoAtual + valorOperacao
        console.log("Deposito realizado com sucesso.")
    break;
    
    case (operacao == "Consultar Saldo"):
        console.log(`Seu saldo na conta e R$${saldoAtual.toFixed(2)}.`)
    break;
}

console.log(`Correntista: ${nomeCorrentista}`)
saldoAtual > 0 ? console.log("Saldo Positivo.") : console.log("Saldo zerado/negativo.")
