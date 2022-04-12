let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment(); //armazena em milisegundos

let dateDiff = today - departureDate;

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- segundos\n2- minutos\n3- horas\n4- dias");

if(chosenOption == 1){
    let secondsDeparture = Math.round(dateDiff / 1000); //arredonda um valor quebrado Math.round
    alert("Tempo de vôo: " + secondsDeparture + " segundos");
} else if(chosenOption == 2){
    let minutesDeparture = Math.round(dateDiff / 1000 / 60);
    alert("Tempo de vôo " + minutesDeparture + " minutos");
}else if(chosenOption == 3){
    let hoursDeparture = Math.round(dateDiff / 1000 / 3600);
    alert("Tempo de vôo " + hoursDeparture + " horas");
}else if(chosenOption == 4){
    let daysDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
    alert("Tempo de vôo " + daysDeparture + " dias"); 
}else{
    alert("Opção invalida!")
}