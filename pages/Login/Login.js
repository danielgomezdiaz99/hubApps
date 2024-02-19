import { setUser, setUserData } from "../../global/state/globalState";
import { initControler } from "../../utils/route";
import "./Login.css";
import imgUser from "../../img/usuario.png"
const template = () => `
<div class="login">
    <div class="logo">LOGIN</div>
    <div class="login-item">
      <form action="" method="post" class="form form-login">
        <div class="form-field">
          <label class="user" for="login-username"><img src=${imgUser} alt="usuario"></label>
            <span class="hidden">Username</span></label>
          <input id="username" type="email" class="form-input" placeholder="Username" required />
        </div>
        <div class="form-button">
          <button id="buttonLogin"> Enviar</button>
        </div>
      </form>
    </div>
  </div>
`;

const addListeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  const username = document.getElementById("username");
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  buttonLogin.addEventListener("click", (e) => {

    
    const valueInput = username.value;
    if(expresionRegular.test(valueInput)){
   
    if (localStorage.getItem(`${valueInput}USER`)) {
      const localUser = localStorage.getItem(`${valueInput}USER`);
      const parseUser = JSON.parse(localUser);

     
      parseUser.token = true;

      const stringUser = JSON.stringify(parseUser);
      localStorage.setItem(`${valueInput}USER`, stringUser);
      sessionStorage.setItem("currentUser", `${valueInput}USER`);

      
      setUser(`${valueInput}USER`);
      setUserData(parseUser);
    } else {
      
      const customUser = {
        name: username.value,
        fav: [],
        token: true,
      };

      const stringUser = JSON.stringify(customUser);
      localStorage.setItem(`${valueInput}USER`, stringUser);
      sessionStorage.setItem("currentUser", `${valueInput}USER`);

      setUser(`${valueInput}USER`);
      setUserData(customUser);
      }
    

    initControler();
  }
  else{
    alert("Formato de correo no válido")
  }

  });
};

export const Login = () => {
  document.querySelector("nav").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};
