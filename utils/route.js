import { getUser } from "../global/state/globalState";
import {Login, printTemplateDashboard,PrintPokemonPage,printTemplateHangman} from "../pages"

export const initControler = (pagesRender) => {
   
    switch (pagesRender) {
      case undefined:
        localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
        break;
      case "Pokemon":
        PrintPokemonPage();
        break;
      case "Dashboard":
        printTemplateDashboard();
        break;
      case "Login":
        Login();
        break;
      case "Hangman":
        printTemplateHangman();
      break;
    }
  };
  