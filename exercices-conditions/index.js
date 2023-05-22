let prenom1=prompt("votre prenom");
let nom1=prompt("votre nom");
let age1=prompt("votre age");


let prenom2=prompt("votre prenom");
let nom2=prompt("votre nom");
let age2=prompt("votre age");

if ((prenom1===prenom2)&&(nom1===nom2)&&(age1===age2)) {
    
    console.log(" indentité confirmée")
    if(age1<=13){
        console.log("pas d'acces");
    }else if (age1<=18){
     console.log("acces restreint");

    }else{
     console.log("acces complet");

    }
    
    
}else{
    console.log("erreure d'identification");
}