import { getUser } from  "../../global/state/globalState";
import { initControler } from "../../utils/route";
import { changeColorRGB } from "../../utils"
import barajar from '../../img/barajar.png';
import casa from '../../img/casa.png';
import logout from '../../img/cerrar-sesion.png';
import "./Header.css";
const template = () => `

<div class="icon">
      <h1>Hub Apps</h1>
    </div>

    <nav class="options">
      <div class="changeColor">
        <img src="${barajar}" alt="color_aleatorio" class="imgCabecera" id ="changeColor" />
      </div>
      <div class="principal">
        <img src="${casa}" alt="logout" class="imgCabecera" id = "buttonDashboard" />
      </div>
      <div class="logout">
        <img src="${logout}" alt="logout" class="imgCabecera" id = "buttonLogout" />
      </div>
</nav>
</div>

`
const addListeners =   () =>{

 const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    const color = changeColorRGB();
    document.body.style.background = color;
  }); 

const buttonDashboard = document.getElementById("buttonDashboard");

buttonDashboard.addEventListener("click",(e) =>{
  initControler("Dashboard");
});

const buttonLogout = document.getElementById("buttonLogout");

buttonLogout.addEventListener("click",(e) =>{
  const userState = getUser().name;
  const currentUser = localStorage.getItem(userState);
  const parseCurrentUser = JSON.parse(currentUser);
  const updateUser = { ...parseCurrentUser, token: false };
  const stringUpdateUser = JSON.stringify(updateUser);
  localStorage.removeItem(userState);
  sessionStorage.removeItem("currentUser");
  localStorage.setItem(userState, stringUpdateUser);
  initControler("Login");
})
}

export const printTemplateHeader = () =>{
  document.querySelector("header").innerHTML = template();
  addListeners();
};