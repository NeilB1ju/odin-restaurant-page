export default function createContactPage(){
    const body = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add(".pageContent");

    const title = document.createElement('h1');
    title.textContent = "Contact us Here";

    body.appendChild(pageContent);
    pageContent.appendChild(title);
}
