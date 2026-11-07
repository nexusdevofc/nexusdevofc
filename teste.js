// Arquivo de teste para o card de linguagens do perfil

function saudacao(nome) {
  return `Olá, ${nome}! Bem-vindo ao meu perfil.`;
}

function somar(a, b) {
  return a + b;
}

const linguagens = ["JavaScript", "TypeScript", "Java", "Kotlin"];

linguagens.forEach((linguagem, indice) => {
  console.log(`${indice + 1}. ${linguagem}`);
});

console.log(saudacao("nexusdevofc"));
console.log("2 + 3 =", somar(2, 3));
