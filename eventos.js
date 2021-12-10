let dataEvento = 31/12/2021;
let dataAtual = 10/12/2021;
if (dataEvento <= dataAtual){
    console.log("Data inserida inválida. Tente novamente.")
}else{
    console.log("Data inserida permitida para o cadastro.")
}
let idadeDoParticipante = 15;
if(idadeDoParticipante >= 18){
    console.log("Entrada para o evento permitida.")
}else{
    console.log("Entrada para o evento permitida apenas para maiores de 18 anos")
}
console.log("Realização da lista de palestrantes e participantes do evento")
let listaDeParticipantes = ["Igor", "Jeovana", "João", "Jéssica", "Ana"]
if(listaDeParticipantes > 100){
    console.log("O evento só vai ser liberado até 100 participantes")
}else{
    console.log("O evento está cadastrado e liberado com sucesso!")
}
