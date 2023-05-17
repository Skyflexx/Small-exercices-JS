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

const parentEl2 = document.querySelector("#s2")

const box2 = document.createElement("div")