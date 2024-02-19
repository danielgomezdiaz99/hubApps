import "./Hangman.css";
import { hangmanTemplate} from "../../utils";
import { checkLetter} from "../../utils";
import { word} from "../../utils";
import { InicialLives} from "../../utils";
import hanman from '../../img/hanman.png';

const template = () => `<div id = "game-container">
<h2>BIENVENIDO AL JUEGO DEL AHORCADO </h2>
<div class="vidas"><h3>Te quedan <spam id="lives">${InicialLives}<spam> oportunidades</div>
<div class ="juego" id="juego">
    <div class = "imagen-juego">
        <img src = ${hanman} alt = "logo-ahorcado">
    </div>
</div>
<div class="respuesta">
<div>
<label>Introduce una letra</label>
<input type = "text" id ="letra" maxLength = 1>
</div>
<button id = "comprobar">Comprobar</button>
</div>
</div>`
const addEventListeners = () => {

    const inputRespuesta=document.getElementById("letra")
    
inputRespuesta.addEventListener("input", function(e) {
        const value = inputRespuesta.value;

        if (!/^[A-Za-z]*$/.test(value)) {
            inputRespuesta.value = value.slice(0, -1);
            alert("Solos puedes introducir letras")
        }
       
    });
        const CheckButton = document.getElementById("comprobar");
        CheckButton.addEventListener("click", function(e) {
            let lives = document.getElementById("lives")
            const value = inputRespuesta.value;
        checkLetter(word,value,lives)
       
    });

  };

  export const printTemplateHangman = () => {
    

    document.querySelector("main").innerHTML = template();
  
    document.querySelector("nav").style.display = "flex";
  
    addEventListeners();
    hangmanTemplate();
    console.log(word)

  };