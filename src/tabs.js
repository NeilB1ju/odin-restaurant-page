import createHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

export default function createTabs () {
    const main = document.querySelector("#content");
    const buttons = document.createElement('div');
    main.appendChild(buttons);

    const homeButton = document.createElement('button'); 
    homeButton.innerHTML = "Home";

    const menuButton = document.createElement('button'); 
    menuButton.innerHTML = "Menu";

    const contactButton = document.createElement('button'); 
    contactButton.innerHTML = "Contact";

    buttons.appendChild(homeButton);
    buttons.appendChild(menuButton);
    buttons.appendChild(contactButton);
    buttons.classList.add(".tabs");

    homeButton.addEventListener('click', () =>{
        clearContent();
        createHomePage();
    });

    menuButton.addEventListener('click', () =>{
        clearContent();
        createMenuPage();
    });

    contactButton.addEventListener('click', () =>{
        clearContent();
        createContactPage();
    });
}


function clearContent (){
    const main = document.querySelector("#content");
    main.childNodes[1].remove(); 
}