import rl from 'readline-sync';

// Salvando os dados
let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
]

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]

console.log("Escolha uma das alternativas:\n")
console.log("1 - Listar os salários mínimos de 2010 à 2020\n" +
            "2 - Listar o índice IPCA de 2010 à 2020\n" +
            "3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = rl.question("Digite o numero da sua escolha: ");
escolha = Number(escolha);

console.log("\nOpção escolhida: " + escolha);

// Labels
let label_ano = "Ano:";
let label_sal = "Salário mínimo:";
let label_ipca = "Inflação IPCA:";
let label_cresc = "Crescimento salarial:";

label_ano = label_ano.padEnd(30,'.');
label_sal = label_sal.padEnd(30,'.');
label_cresc = label_cresc.padEnd(30,'.');
label_ipca = label_ipca.padEnd(30,'.');

// Escolhas
switch (escolha){
    case 1:
        for (let i of salarioMinimo) {
            let ano = i.ano;
            let salario = i.salario;
    
            console.log(label_ano + ano);
            console.log(label_sal + "R$ " + salario.toFixed(2).replace(".",",") + "\n");
        }
        break;
    case 2:
        for (let i of inflacao) {
            let ano = i.ano;
            let inflacao = i.ipca;
    
            console.log(label_ano + ano);
            console.log(label_ipca + inflacao.toFixed(2).replace(".",",") + "%\n");
        }
        break;
    case 3:
        for (let i = 0; i < salarioMinimo.length; i++) {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            let ipca = inflacao[i].ipca;
    
            let crescimento = "-";
    
            console.log(label_ano + ano);
            console.log(label_sal + "R$ " + salario.toFixed(2).replace(".",","));
            if(i > 0){
                let salarioAnterior = salarioMinimo[i-1].salario;
                let diferenca = salario - salarioAnterior;
    
                crescimento = (diferenca / salarioAnterior) * 100;
    
                console.log(label_ipca + crescimento.toFixed(2).replace(".",",") + "%");
            } else {
                console.log(label_ipca + crescimento); 
            }
            console.log(label_ipca + ipca.toFixed(2).replace(".",",") + "%\n");
        }
        break;
    default:
        console.log("Opção Inválida!")
        break;
}