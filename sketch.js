let filmes = [
  { nome: "O Senhor dos anéis", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "Viva-A vida é uma festa", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "Harry Potter", idade: 10, categorias: ["drama", "fantasia", "aventura"] },
  { nome: "Os vingadores:Guerra infinita", idade: 12, categorias: ["fantasia", "aventura"] },
  { nome: "O poderoso chefão", idade: 12, categorias: ["drama"] },
  { nome: "A vida é bela", idade: 14, categorias: ["drama"] }
];

let idadeUsuario;
let filmesRecomendados = [];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Filmes", 20, 30);

  // Coletar idade
  idadeUsuario = parseInt(prompt("Qual sua idade?"));

  // Coletar preferências de forma mais concisa
  const gostaFantasia = prompt("Você gosta de filmes de fantasia? (sim/não)").toLowerCase() === "sim";
  const gostaAventura = prompt("Você gosta de filmes de aventura? (sim/não)").toLowerCase() === "sim";
  const gostaDrama = prompt("Você gosta de filmes de drama? (sim/não)").toLowerCase() === "sim";

  // Filtrar filmes com base na idade e preferências
  for (const filme of filmes) {
    if (idadeUsuario >= filme.idade) {
      if (
        (gostaFantasia && filme.categorias.includes("fantasia")) ||
        (gostaAventura && filme.categorias.includes("aventura")) ||
        (gostaDrama && filme.categorias.includes("drama"))
      ) {
        filmesRecomendados.push(filme.nome);
      }
    }
  }

  // Exibir os filmes recomendados
  if (filmesRecomendados.length > 0) {
    text("Filmes recomendados para você:", 20, 70);
    for (let i = 0; i < filmesRecomendados.length; i++) {
      text(`- ${filmesRecomendados[i]}`, 40, 100 + i * 25);
    }
  } else {
    text("Nenhum filme disponível para sua idade e preferências.", 20, 70);
  }
}
