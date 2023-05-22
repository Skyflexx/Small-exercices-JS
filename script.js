// EXERCICE 1

const parentEl1 = document.querySelector("#s1") // On selectionne le parent dans lequel on veut injecter du code html

const box = document.createElement("p") // Creation de notre élément

box.classList.add("carre")

parentEl1.appendChild(box) // Dans parentEl apparait l'enfant "Box".

box.textContent = "Texte" // On écrit du texte dans la box.

// Fonction pour récupérer le CSS dans une variable 

let cssProperties = window.getComputedStyle(box) // Initialisation de notre variable qui contiendra les propriétés voulues

cssList = "Class : " + box.className +
        "\nBackground color : " + cssProperties.getPropertyValue("background-color") + 
        "\nHeight : " + cssProperties.getPropertyValue("height") +
        "\nWidth : " + cssProperties.getPropertyValue("Width") +
        "\nDisplay : " + cssProperties.getPropertyValue("display") +
        "\nFont-Family : " + cssProperties.getPropertyValue("font-family")


box.addEventListener("click", function(){
    window.alert(cssList)
})

// EXERCICE 2

const parentEl2 = document.querySelector("#s2") // On détermine l'emplacement où on va mettre nos box

const box2 = document.createElement("div") // Création d'une div qui sera notre box principale.

box2.classList.add("box") // Avec son style CSS associé

for (let i = 1; i <= 4; i++){ // Boucle afin de cloner la box créée ci dessus. Chaque clone sera injecté dans la section parenEl2

    let newBox = box2.cloneNode() // clonage de la box

    newBox.innerText = i // avec le numéro de la box à l'intérieur de celle ci

    parentEl2.appendChild(newBox) // Et affichage dans le HTML

    let isClicked = false // Variable qui servira de référence. Lors du clic sur la boite, si isclicked est false alors on ajoute modifie sa classe CSS. La variable passe à true.

    newBox.addEventListener("click", function(){

        if (!isClicked){ // Si lors du clic c'est False, alors on ajoute la classe CSS. On passe la variable à true.

            newBox.classList.add("box-click") 
            isClicked = true
            
        } else {   // Si lors du clic c'est true, alors on remove la classe CSS et on repasse à false pour la réinitialisation d'origine

            newBox.classList.remove("box-click") 
            isClicked = false
        }

    })}

// Exercice 3

const parentEl3 = document.querySelector("#s3")

const box3 = document.createElement("div")

box3.classList.add("box3")

let i = 0 // nombres de box qu'on incrémente à chaque ArrowUp.

document.onkeydown = function(event){    

    if (event.key == "ArrowDown"){ // .keyCode est deprecated. On utilise key et le texte ArrowDown. Attention à la casse.

        if (i != 225) {

            i++ // On incrémente i défini plus haut. Ce qui donnera des box avec des id style "box1", "box2" etc

            let newBox3 = box3.cloneNode() // On clone notre box déclarée au début.

            newBox3.id = "currBox" + i // Et on lui attribue un id spécifique dont le nom sera currBox1, puis currBox2 etc vu qu'on le concatène avec i.

            parentEl3.appendChild(newBox3) // Et on la fait apparaître.

            // on fait un floor d'un chiffre random (entre 0 et 1 * 16m de couleurs) qu'on ressort en tostring (base 16) ce qui sortira une suite de caractères hexadecimaux. Soit des chiffres, soit des lettres.
            newBox3.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16)) // Attribution d'une couleur aléatoire au style CSS
        
            if (i == 225){ // dans la même condition, si i = 225, on a créé notre 15*15

                for(n = 1; n<= 225; n++){ // On créé une boucle pour récupérer tous les id's de toutes les box afin de les rendre cliquables

                    let idOfBox = "currBox" + n // récupération des id's des box.

                    document.getElementById(idOfBox).addEventListener("click", function(){

                        document.getElementById(idOfBox).style.backgroundColor = "black" // en cas de clic la case devient noire.
                        
                    })
                }
            }          
        }   
    } 
    
    let currBox = document.getElementById(("currBox" + i)) // Pour la suite, on récupère le dernier élément créé en concaténant "currBox" avec le i actuel dans le script.

    if(event.key =="ArrowUp"){ // Si la douche arrowUp est pressée, on remove la box en cours qu'on a selectionné par son id au dessus

        currBox.remove() // suppression de la box

        i-- // On décrémente i pour pouvoir accéder à la box qui précède celle qu'on vient de supprimer.
    }
}  

// Exercice 4

// Déclarations

// Création de notre formulaire
const section4 = document.querySelector("#s4")
const form = document.createElement("input")
section4.appendChild(form)

// Ajout d'un id, d'une classe CSS, d'une valeur et d'un type à notre formulaire
form.classList.add("formEl")
form.id = "inputEl"
form.value = "Saisir montant en euro"
form.type = "text"

// Ajout d'un paragraphe qui servira pour afficher des messages dont le resultat en live de la conversion
const message = document.createElement("p")
section4.appendChild(message)
message.textContent = "Valeur en francs :"

// Fonctions

form.addEventListener("click", function(){ // Au clic de l'inputField, on la vide à chaque fois comme une réinitialisation
    form.value = ""
    message.textContent = "Valeur en francs :" // On réaffiche le message de base.
})

form.onkeyup = function(){ // form.onkeyup, càd si une touche du clavier est levée. (onkeydown ne fonctionnait pas correctement pour cette fct)

   if (isNaN(form.value)){ // isNaN est une fct native de JS pour "Is Not a Number". Retourne true si c'est le cas. Donc si true alors on affiche un message d'alerte.

    message.textContent = "Veuillez saisir un nombre !" // msg d'alerte si on ne rentre pas de nombre.

   } else {

    message.textContent = "Valeur en francs : " + ((form.value) * 6.55957).toFixed(2) // nombre.toFixed(2) veut dire qu'on fixe les décimales à 2 max.

   } 
}












