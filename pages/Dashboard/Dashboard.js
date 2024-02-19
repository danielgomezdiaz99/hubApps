import { getData } from "../../global/state/globalState";
import { getUserData } from "../../global/state/globalState";

import { getInfo,initControler } from "../../utils";
import "./Dashboard.css";
import imagen from '../../img/pokeball.png';
import hanman from '../../img/hanman.png';


const template = () => `
<h2 class="welcome">Bienvenido <spam id = "user"></spam></h2>
<div class="menu-container">
  <div class="menu1">
      <h2>Poke-Api</h2>
      <img src="${imagen}" alt="pokeball" id ="navigatePokemon">
  </div>
  <div class="menu2">
      <h2>Juego del ahorcado</h2>
      <img src="${hanman}" alt="hangman" id="navigateHangman">
  </div>
</div>
`;

const addEventListeners = () => {
  
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  const navigateHangman = document.getElementById("navigateHangman");
  navigateHangman.addEventListener("click", () => {
    initControler("Hangman");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();

  document.querySelector("nav").style.display = "flex";
  const userData = getUserData();
  console.log(userData);
  let userSite=document.getElementById("user")
  console.log(userSite)
  userSite.textContent=userData.name
  addEventListeners();

  getInfo();
};
