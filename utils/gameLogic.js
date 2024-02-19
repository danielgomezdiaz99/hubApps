export const checkLetter = (word,letter,lives) => {
    let actualValue = parseInt(lives.innerText);
    let userWord = "";
    let contenedor = document.getElementById("game-container");
    let inputLetra = document.getElementById("letra");
    let nav = document.querySelector("nav")

    if(actualValue>1){
        let loseLive=true;
        for(let i = 0;i<word.length;i++){
            if(word[i].toLowerCase()==letter.toLowerCase()){
                document.getElementById(`input${i}`).value=letter;
                loseLive=false;
                inputLetra.value = inputLetra.value.slice(0, -1);
            }
           
        }
         if(loseLive==true){
            actualValue--;
            lives.innerText = actualValue;
            }
    

    for(let i = 0;i<word.length;i++){
        let caracter = document.getElementById(`input${i}`).value
        userWord = userWord+caracter
     }
     if(userWord == word){
        contenedor.innerHTML=""
        let win = document.createElement("h2");
        win.textContent = "Has ganado, recarga la página para jugar de nuevo";
        win.style.color="green"
        win.classList.add("win")
        nav.style.display="none";
        contenedor.appendChild(win);

     }
    
    }
    else{
        contenedor.innerHTML=""
        let lose = document.createElement("h2");
        lose.textContent = "Has perdido,recarga la página para jugar de nuevo";
        lose.style.color="red"
        lose.classList.add("lose")
        nav.style.display="none";
        contenedor.appendChild(lose)
    }
}