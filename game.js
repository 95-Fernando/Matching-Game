//Variables
let flippedCards = 0;
let cardOne = null;
let firstResult = null;
let cardTwo = null;
let secondResult= null;
let movementsCounter = 0;
let hitsCounter = 0;
let timer = false;
let timeCounter = 30;
let regressiveTime = null;

//HTML connections
let showMovements = document.getElementById("movements");
let showHits = document.getElementById("hits")
let firstContainer = document.getElementById("firstContainer")
let secondContainer = document.getElementById("secondContainer")
let statisticsTitle = document.getElementById("statisticsTitle")
let congratulations = document.getElementById("texts")
let winnerButton = document.getElementById("winnerButton")
let hitsContainer = document.getElementById("hitsContainer")
let timeContainer = document.getElementById("timeContainer")
let movementsContainer = document.getElementById("movementsContainer")
let timeStatistic = document.getElementById("time")
let loserText = document.getElementById("loserText")



//Generar numeros del array aleatoreamente
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(() => {return Math.random() - 0.5});
console.log(numbers)

//Función contenedora de los elementos al terminar el juego, ya sea ganar o perder 
const endGame = () => {
    firstContainer.classList.add("hide");
    statisticsTitle.classList.add("hide")
    winnerButton.classList.remove("hide")
    hitsContainer.classList.replace("statistics", "statistics__winner")
    timeContainer.classList.replace("statistics", "statistics__winner")
    movementsContainer.classList.replace("statistics", "statistics__winner")
}
const time = () => {
   const regressiveTime = setInterval(() =>{
        timeCounter--;
        timeStatistic.innerHTML = `${timeCounter} s`
        if(timeCounter == 0){
            clearInterval(regressiveTime)
            endGame()
            secondContainer.classList.replace("container", "winner__container")
            secondContainer.classList.add("loser__container")
            loserText.classList.remove("hide")
        } else if(hitsCounter == 8){
            clearInterval(regressiveTime)
            }
    },1000);
}
// Función a ejutar a la hora de voltear las tarjetas
const flip = (id) => {
    if(timer == false){
        time()
        timer = true // se pone el valor true despues de ejecutar, para hacer que la función unicamente se ejecute una vez
    }

    flippedCards++
    console.log(flippedCards)

    if(flippedCards == 1){ // Ejecución cuando el contador es 1
        cardOne = document.getElementById(id);
        firstResult = numbers[id];
        cardOne.innerHTML = firstResult;
    
        //Deshabilitar el boton uno
       cardOne.setAttribute("disabled","true")
    } else if (flippedCards == 2){ // Ejecución cuando el contador es 2
        cardTwo = document.getElementById(id);
        secondResult = numbers[id];
        cardTwo.innerHTML = secondResult;
        
        //Deshabilitar segundo botón
        cardTwo.setAttribute("disabled","true")

        //Incrementar movimientos
        movementsCounter++
        showMovements.innerHTML = movementsCounter

        //Encerar el contador de tarjetas destapadas
        flippedCards = 0
        
        //Consultar si la primer resultado es igual al segundo resulado
        if(firstResult == secondResult){
            hitsCounter++
            showHits.innerHTML = hitsCounter 
        } else { // Caso contrario en que los 2 resultados no sean iguales
            setTimeout(() =>{
                cardOne.innerHTML = ""
                cardTwo.innerHTML = ""
                cardOne.removeAttribute("disabled")
                cardTwo.removeAttribute("disabled")
            }, 800 ) ;
        }
    }
    if(hitsCounter == 8){ //Preguntar si el usuario hizo 8 aciertos
        //Mostrar mensaje de Felicitaciones
       endGame()
       secondContainer.classList.replace("container", "winner__container")
       congratulations.classList.remove("hide")
    }
}

const refresh = () =>{
    location.reload()
}




