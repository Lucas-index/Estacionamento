
const readline = require("readline");

// Entrada de dados no console
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
let opcao;



// Exibir o menu
function mostrarMenu() {
 console.log("\nMenu");
 console.log("1 - Entrada");
 console.log("2 - Saída");
 console.log("3 - Sair do Sistema");
 rl.question("Escolha uma opção: ", (resposta) => {
 opcao = Number(resposta);
 switch (opcao) {
 case 1:


 // Registro de Entrada
 console.log("Registro de entrada");
 mostrarMenu();
 break;
 case 2:



 // Função para registro de Saída
 console.log("Registro de saída");
 mostrarMenu();
 break;
 case 3:
 console.log("Saindo do sistema...");
 rl.close();
 break;
 default:
 console.log("Opção inválida!");
 mostrarMenu();
 break;
 }
 });
}
// Início do programa
mostrarMenu();