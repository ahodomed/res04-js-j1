 let randomNbr = Math.random() * (100 - 1) + 1; // ça c'est bonus c'est pour avoir un nombre aléatoire
let nbr = Math.floor(randomNbr);
let guess = -1;

while(parseInt(guess) !== nbr)
{
        guess = parseInt(window.prompt("Saisissez un nombre : "));
    
    if(guess > nbr)
    {
        window.alert("Le nombre est plus petit");
    }
    else if(guess < nbr)
    {
        window.alert("Le nombre est plus grand");
    }
    else
    {
            window.alert("C'est gagné !");
        break;
    }
}
 
 
 
 
 // let nbComp= Math.floor(Math.random() * 100);
 // let nbUser= window.prompt("entrez un nombre comprise entre 0 et 100");
 
 // do{
 //  if(nbUser < nbComp){
 //     alert("le nombre est plus grand que le votre");
 //      let nbUser= window.prompt("entrez un nombre comprise entre 0 et 100");
      
      
 //  } if(nbUser > nbComp){
 //     alert("le nombre est plus petit que le votre");
 //      let nbUser= window.prompt("entrez un nombre comprise entre 0 et 100");

 // }else{
 //     alert("vous avez gagné!");
 // }

 // }
 
 
 
 
 
 
 
 
 
 
 
 