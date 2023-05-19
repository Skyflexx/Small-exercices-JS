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

document.onkeydown = function(event){

    if (event.key == "ArrowUp"){ // .keyCode est deprecated. On utilise key et le texte ArrowUp. Attention à la casse.

        let newBox3 = box3.cloneNode()
        parentEl3.appendChild(newBox3)

        newBox3.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16))

        
    } 

}  // IN PROGRESS. Les box se créent mais ne se delete pas encore.








