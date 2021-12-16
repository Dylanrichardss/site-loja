/*
Primeiro JS 
Curso com Guanabara
= é recebe 
null é nula 
variável deve colocar antes: var ou let
-----------
Data Types:
number - Infinity, NaN
string 
boolean
null
undefined
object - Um monte até array
function
--------------
typeof é usado para mostrar qual tipo de dado é tal variável
+ é concatenação
Number.parseInt() é inteiro
Number.parseFloat() é real
Pode colocar só Number
De inteiro para string pode colocar String


var numero1 =Number(prompt('Digite um número'))
var numero2 =Number(prompt("Digite um outro número"))
var soma = numero1 + numero2
alert ('A soma dos valores é ' + soma)


var nome = prompt ("Qual seu nome?")
document.writeln('Seu nome tem ' + nome.length + ' letras<br>')
document.write('Maiusculo ' + nome.toUpperCase()+'<br>')
document.write('Minusculo ' + nome.toLowerCase())


var n1 = 1545.5
document.write('Número com 2 casa ' + n1.toFixed(2).replace('.',',')+ '<br>')
//Currency é Moeda
document.write(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

n = n ** 4 pode ser o mesmo que n **=4
n = n - 5 pode ser o mesmo que n -=5

Incremento pode ser n ++ ou n --
n ++ é n+1
n -- é n-1

== é igualdade
!= é diferente
Igualdade não vé o tipo. Vê só o resultado, tipo:
5 == '5'
Ai teria que colocar 5 === 5 mesmo valor e mesmo tipo

Ternário:
Teste ? true : false
Teste lógico      o que acontece quando for verdadeiro     o que vai acontecer quando for falso
média>=7?'Aprovado':'Reprovado'

DOM
Document
Object
Model
Está presente só no JS web
Conjunto de objetos dentro do navegador que vai dar acesso a componentes dentro do site
Árvore DOM  Árvore hierárquica
Raiz - Tudo dentro do JS está dentro do Window. É um objeto DOM. Tem vários objetos, tipo: o location, document, history

Dentro do Document tem o html. Dentro do html tem o head e o body
Exemplo:
window.document.write('Olá Mundo<br>')
window.document.write(document.URL)

------------------------------
Cada coisa da árvore chama elemento
Pode selecionar elementos por vários métodos.
Pode acessar elementos por:
Por marca
Por ID
Por nome
Por classe
Por seletor (CSS)
----------------------------------


Por marca é tagname
getElementByTagName('a tag')[entre colchetes, sem dar espaço, qual vai ser na sequência do código, sem aspas] 

Consegue seleionar mais de um objeto na mesma tag. Tipo, tem 2 tags p
Mas ai só tem uma tag body, div, h1

var paragrafo = window.document.getElementsByTagName('p')[1] //0 é o primeiro paragrafo
document.write('O páragrafo selecionado está escrito: ' + paragrafo.innerHTML)//innerText é o texto que está dentro do primeiro paragrafo. innerHTML é o texto com o formato
paragrafo.style.color = 'blue'

------------------------------------

Por ID
getElementByid()
Identificar tag por id e puxar esse id

var d = window.document.getElementById('msg')
d.style.background = 'green'
d.innerText = 'Olá Tudo bem?'
-----------------------------------

Por Nome
getElementsByName()
Precisa usar o colchete quando tem mais de um objeto
----------------------------------

Por Classe
getElementsByClassName
------------------------------------

Por seletor
Selector é um métoodo mais recente
div é #
classe é .

var d = document.querySelector('div#msg') //# pq é id. Se fosse class lá no html, seria .
d.style.color = 'black'
d.style.background = 'yellow'

----------------------------------

Eventos DOM
Evento é o que possa acontecer com qualquer elemento, como uma div

Os mais comuns são eventos de mouse:
6 eventos principais
mouseenter - é quando mouse chega dentro da div
mouseemove - é quando mover o mouse dentro da div
mousedown - é quando clica e segura
mouseup - quando solta o botão do mouse
click - Aperta e solta rápido
mouseout - quando move o mouse pra fora da div


Pra disparar e tratar um evento - veja função

Função - conjunto de códigos, linhas, blocos de códigos que vão ocorrer só quando o evento ocorrer

Bloco em JS é entre {chaves} nomeado com uma function ação(parametros) exemplo:
function ação(param){

}

código de clique:
var a = window.document.getElementById('area')
a.addEventListener('click', clique)
a.addEventListener('mouseenter', entre)
a.addEventListener('mouseout', saiu)

function clique(){
    a.innerText = 'Clicou'
    a.style.background= 'red'
}

function entre(){
    a.innerText = 'Entrou'
}

function saiu(){
    a.innerText='Saiu'
    a.style.background= 'green'
}

2 tipos de condições:
Condição simples
if (condição){
    true
} 
Nada vai acontecer caso for falso, vai continuar

Condição 
if (condição){
    true
} else {
    false
}

Condição multipla
switch(expressão (variável)){
    case valor1:

        break pra parar. Obrigatório. Não esqueça
    case valor2:

        break
    case valo3:

        break
    default:
        que é o else, padrão, se nenhum for satisfeito
        break
    }



    Repetições:

    While 
    repete enquanto for verdadeiro
    while(condição){
        bloco de comando
    } quando for false, o fluxo vai ser desviado para fora
    Testa e faz
    Estrtura de repetição com teste no inicio


    do{
        bloco
    } while (condição)
    Faz bloco depois tenta a condição
    Estrtura de repetição com teste no final

    var c = 1
do{
    document.writeln(c)    
    c++
} while (c<=6)
document.write('<br>')
var d = 1
while(d<=6){
    document.writeln(d)
    d++


Estrutura de repetição com variável de controle

for (inicio;teste;incr){
    bloco
}
Ele inicia, faz o teste lógico. Se for verdadeiro, faz o bloco e depois incrementa:

for (var i=1;i<=10;i++){
    document.write(i)
}
Compare com o while: 
var i = 1
while (i<=10){
    document.write(i)
    i++
} 


Variáveis compostas - Array - Vetor
elemento de um vetor é um par que agrupa o espaço da memória, o valor e o indice
vaga a = [valor 1, valor2, valor3]
Cada espaço da variável composta é a chave, indice ou key
let num = [1,2,3]
console.log('Nosso vetor é o ${num})
num[3] = 6 Acrescenta um novo indice ao vetor. Maneira automatizada
Maneira pra colocar na ultima posição
num.push(7)
num.length atributo para mostrar comprimento do array
num.sort() pega todos os números e coloca em ordem crescente

Exercicios 5 comentários
Aquele for não é a unica maneira de fazer. Um jeito mais simplificado:
for in

for (let c in num ) //para cada posição dentro (ou em) de num, eu vou... código
console.log

num.indexOf(7)
Vai retornar se tem e qual indice está o valor 7, dentro da variavel num
-1 significa que o JS procurou mas não achou.

Toda função pode ter chamada, parametros, ação e retorno
Ações são executadas assim que são chamadas ou quando acontece um evento
Um funcão pode pode receber parametros e retornar um resultado

function ação(param){

    return res
}
ação(5) Essa é a chamada
Vai executar a função ação. O parametro da função vai valer 5. Vai fazer as contas que quiser e pode retornar um resultado


function parimp(n){
    if(n%2==0){
        return 'par'
    } else {
        return 'impar'
    }
}
var res = parimp(5)
console.log (res)

*/

var hoje= new Date() 
var dataagora=document.getElementById('data')
var switch_diasem = hoje.getDay()
var diasem



hora=hoje.getHours()
alo=document.getElementById("boas_vindas")
if(hora<12){
    alo.innerText= "Bom dia!"
} else if(hora<=18) {
    alo.innerText= "Boa tarde!"
} else {
    alo.innerText= "Boa noite!"
}


function somar() {
    var opa = window.document.getElementById('texto') //caixa de texto 1 sem o valor, só a caixa
    var opa2 = window.document.querySelector('input#texto2') //caixa de texto 1 sem valor, só a caixa
    var res = window.document.getElementById('res')

    var n1 = Number(opa.value) // Conversão para nº e pega o valor da caixa 1
    var n2 = Number(opa2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong> ${s} </strong>`
}

/* Acima são as variáveis, o cumprimento e a soma ------------------------------------------------------*/


var a = window.document.getElementById('paleta')
var bt2 = window.document.getElementById('video')

const bts = [a, bt2]
for (i in bts){
bts[i].addEventListener('click', clique)
bts[i].addEventListener('mouseenter', entre)
bts[i].addEventListener('mouseout', saiu)

}

function clique(){
this.style.background= 'Black'
this.style.color='white'
}

function entre(){
this.style.background= 'lightgrey'
}

function saiu(){
this.style.background= 'white'
this.style.color='black'
}


switch(switch_diasem) {
    case 0:
        diaem = "Domingo"
        break
    case 1:
        diasem = "Segunda-feira"
        break
    case 2:
        diasem = "Terça-feira"
        break
    case 3:
        diasem = "Quarta-feira"
        break
    case 4:
        diasem = "Quinta-feira"
        break
    case 5:
        diasem = "Sexta-feira"
        break
    case 6:
        diasem = "Sábado"
        break
}

dataagora.innerHTML = `${diasem}<br>${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()}<br>${hora}:${hoje.getMinutes()}:${hoje.getSeconds()}`




