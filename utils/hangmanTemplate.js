import { randWord } from "../utils";
export const word = randWord();
export let InicialLives = 7;

export const hangmanTemplate = () =>{
const gameContainer = document.getElementById("juego");

for(let i = 0;i<word.length;i++){
    let input = document.createElement("input");
input.type="text";
input.classList.add("letter")
input.readOnly=true;
input.id=(`input${i}`)
    gameContainer.appendChild(input);
}
}


