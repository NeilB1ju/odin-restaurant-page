export default function createMenuPage() {
    const body = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add(".pageContent");

    const title = document.createElement('h1');
    title.textContent = "This is the Menu";

    const menuItem = document.createElement('p')
    menuItem.textContent = "Shawarma";

    const descText = document.createElement('p');
    descText.textContent = "This is an amazing menu";

    body.appendChild(pageContent);
    pageContent.appendChild(title);
    pageContent.appendChild(menuItem);
    pageContent.appendChild(descText);
}