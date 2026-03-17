let nome; // Variáveis requisitadas
let categoria;
let destino;
let quantidadeDePassagens;
let desconto; // Uso para o cálculo do preço
let precoBase; 
let subtotal;
let total;

nome = prompt("Digite seu nome: ");
categoria = parseInt(prompt("Digite sua categoria  (1 - Adulto, 2 - Estudante, 3 - Idoso, 4 - Criança menor de 5 anos)\n :"));

switch(categoria) 
{
case 1:
    desconto = 0;
    categoria = "Adulto"; // Eu sei que isso não é uma boa prática de código, porém eu não sei uma forma de lá na frente usar a variável categoria e ela dar output de "Adulto" no console.log. E funciona, que é mais importante
    break;
case 2:
    desconto = 0.5;
    categoria = "Estudante";
    break;
case 3:
    desconto = 0.5;
    categoria = "Idoso";
    break;
case 4:
    desconto = 1;
    categoria = "Criança menor de 5 anos";
    break;
default:
    console.log("Categoria inválida")
    return;
}

destino = parseInt(prompt("Digite seu destino 1 - Destino A: R$ 45,00 / 2 - Destino B: R$ 72,00 / 3 - Destino C: R$ 110,00 / 4 - Destino D: R$ 138,00\n :"));

switch(destino) 
{
case 1:
    precoBase = 45;
    destino = "A"; // Mesma coisa que eu fiz anteriormente para categoria
    break;
case 2:
    precoBase = 72;
    destino = "B";
    break;
case 3:
    precoBase = 110;
    destino = "C";
    break;
case 4:
    precoBase = 138;
    destino = "D";
    break;
default:
    console.log("Destino inválida")
    return;
}
quantidadeDePassagens = parseInt(prompt("Digite o número de passagens desejadas: "));

subtotal = precoBase * quantidadeDePassagens;
total = subtotal * (1 - desconto);

total < 100 ? console.log("PAGAMENTO À VISTA") : console.log("PARCELÁVEL EM ATÉ 3 VEZES SEM JUROS");

switch(true)
{
    case total == 0:
        console.log("Embarque gratuito liberado.");
        break;
    case total < 100:
        console.log("Dirija-se até o guichê para o pagamento.");
        break;
    case total < 200:
        console.log("Pagamento via terminal disponível.");
        break;
    case total >= 200:
        console.log("Atendimento prioritário no guichê VIP.")
}

console.log(`Nome: ${nome}\nCategoria: ${categoria}\nDestino: ${destino}\nQuantidade de Passagens:${quantidadeDePassagens}\nDesconto: ${desconto*100}%\nPreço Base: R$${precoBase.toFixed(2)}\nSubtotal: R$${subtotal.toFixed(2)}\nTotal: R$${total.toFixed(2)}`);
