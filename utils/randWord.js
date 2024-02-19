export const randWord = () =>{
    const words = [
        "manzana", "pera", "banana", "naranja", "uva", "sandía", "melon", "limón", "fresa", "kiwi",
        "papaya", "piña", "cereza", "mango", "ciruela", "mandarina", "frambuesa", "arándano", "granada", "higo",
        "plátano", "aguacate", "guayaba", "tamarindo", "maracuyá", "lúcuma", "guanábana", "durazno", "nectarina", "zarzamora",
        "arándano", "coco", "lima", "pomelo", "toronja", "pomelo", "ciruela", "higo", "carambola", "níspero",
        "papaya", "tuna", "pitahaya", "feijoa", "mamey", "nuez", "avellana", "pistacho", "almendra", "cacahuate",
        "castaña", "chirimoya", "chabacano", "zapote", "tejocote", "jacaranda", "frambuesa", "zarzamora", "capulín", "arrayán",
        "espino", "nogal", "cachimbo", "higo", "piñón", "tamarindo", "guamúchil", "jícama", "berenjena", "rábano",
        "papa", "zanahoria", "calabaza", "betabel", "espinaca", "lechuga", "repollo", "coliflor", "brócoli", "chícharo",
        "pimiento", "jitomate", "cebolla", "ajo", "chile", "pepino", "jengibre", "cilantro", "albahaca", "perejil",
        "romero", "tomillo", "menta", "laurel", "orégano", "canela", "clavo", "nueces", "cardamomo", "pimienta"
      ];

let rand = Math.floor(Math.random() * words.length);

return  words[rand];
}