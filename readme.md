        CSS
# Declaração
- Seletor
- Propriedade e valor

# Conceitos
- Castata
- Especificidade
- Box model
- box model 
- display block vs display line
        
        

          Java Scrypt
   1. Variaveis 
let estaChovendo = true (pode alterar o valor mais tarde)
const meuNome = "Junior"(nao consigo alterar ela é constante)
as variaveis serve para atribuir um valor na memoria para usar mais tarde
obs:nao usar caracteres especias e sempre no lugar de espaço a proxima 
letra maiuscula

   2.Tipos de dados
String
""
''
string é todo texto que é usado dentro das aspas

Number (Numeros)
12 - Integer (+ -)
3.2 - Float (+ -)

Boolean (Verdadeiro ou Falso)
True ou False 
Const maiorDeDezoito = false 

undefined - indefinido

3. Operadores
 Atribuiçoes (ex: =)
 atribuir valor
 let n1 = 12
 let n2 = 3
obs:o = é uma atribuiçao de valor se fala "recebe tal valor" .

 console.log(n1 + n2)

 Aritimeticos (ex:* / + - )
 calculos matematicos simples
 console.log(12 * 4) 

 Concatenaçao de String (*)

 Comparaçao (ex: > < == )
 transforma a expressao em true ou false
const maiorQue = 1 > 2 // false
const iguaLa = 1 == 1 // true

4.Condicional (if/else)
const idade = 17
const maiorDeDezoito = idade >= 18
if(maiorDeDezoito) {
  alert("pode tirar carteira de motorista")
} else {
  alert("nao pode tirar")
}
. Estruturas de dados
Arrey - Vetor - Lista
Arrey - - - - -        0     1    2  3
const temperaturas = [23.3, 32.2, 1, 5]

Object
const pessoa = {
  Nome: "junior",
  idade: "29",
  Filhos: ["k", "J", "L", "G"]
}
console.log(pessoa.idade)
6.Function
1. Criaçao
function nomeDaFunçao() {
   console.log('codigo dentro da funçao')
}

2.Execuçao
nomeDaFunçao()

Parametros
function soma(a, b) {
  console.log(a + b)
}
soma(34, 45)
soma(90, 54)

Retorno
function soma(a, b) {
  return a + b
}
console.log(soma(2, 2))
console.log(multiplica)

7.Extençoes da linguagem (ex: Math, Date ....)
Math.random()
Math.floor(1.2)
Math.ceil(1.2)
Math.PI

8. DOM - Document Object Model
window
window.alert("alerta")
Document
document.wride("texto")
manipular elementos
document.documentElement.style.background = "black"
      CSS
 margin:0;
  box-sizing: border-box;
  /*isso se chama reset,usando o seletor universal *com a margin: 0
  ele tira a margem dos 4 cantos deixando um ajuste mais fino 
  seletor universal seleciona todos os elementos.*/
   
    background-color: black;
  color: white; 
  text-align: center;
  font-family: sans-serif;
  /*backgraund é fundo, color é o texto,text-align serve para 
  centralizar os textos,font-family é o tipo de fonte.*/
}      
margin-top: 100px;
    width: 80%;
    max-width: 400px;
    margin-inline: auto;
    /*margin-top é o espaço de margen na parte de cima da imagem
  podemos usar como medida % ou px
    widht é a largura do elemento,o max-widt é tamanho maximo
    margin-right: auto;*/
    /*margin-left: auto; 
    margin-inline serve para margen dos dois lados dir. e esq.
    o # funciona como um seletor de ID nesse caso usado para
    o modo box*/

     margin-top: 40px;
    margin-bottom: 10px;
    opacity: 0.9;
    /*essas propriedades margin sao para o espaço entre os textos
    o opacity é a opacidade do testo (um pouquinho mais escuro)ele vai
    do 0 que é totalmente escuro ao numro 1 que é 100% da cor selecionada*/

    display: block;
    width: 100%;
    padding: 20px;
    font-size: 20px;
    border-radius: 4px;
    /*o display:block é o modo bloco da caixa de pergunta e do botao
    o font-size é o tamanho do texto dentro das caixas,o border-radius 
    é para o arredondamento das pontas das caixas*/

    border: none;
    background-color: blueviolet;
    color: white;
    transition: filter .2s;
    /*transition serve para a transiçao da iluminaçao de quando o mouse 
    toca no botao,o none serve para tirar algum elemento*/
  
button:hover {
    filter: brightness(1.2);
    cursor: pointer;
    /*pseudo-class :houver,serve para que algo aconteça quando 
    o mouse fica em cima de um determinado elemento.é importante que
    seja escrito tudo junto sem espaços, o cursor é para a setinha 
    do mouse virar a maozinha*/

    