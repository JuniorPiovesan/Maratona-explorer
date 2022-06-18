// Quais sao minhas variaveis?
// Dados de entrada?
// Dados de saida?
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#botaoPerguntar")
const respostas = [
  "Certeza.",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas.",
"Pergunte novamente mais tarde.",
"Sim,definitivamente!",
"Minha resposta é nao.",
"Você pode contar com isso.",
"Melhor nao te dizer agora.",
"A meu ver sim.",
"Minhas fontes dizem que nao.",
"Provavelmente.",
"Não é possivel prever agora.",
"Perspectiva boa.",
"As perspectivas nao sao tao boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"sinais apontam que sim.",
]
// clicar para fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }
  botaoPerguntar.setAttribute("disabled", true)
  

  const pergunta = "<div>" + inputPergunta.value + "</div>"

// Gerar numero aleatorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1

//sumir a resposta depois de 3 segundos
setTimeout(function() {
  elementoResposta.style.opacity = 0;
botaoPerguntar.removeAttribute("disabled")
 }, 3000)
}

