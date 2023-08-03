export default function createHomePage(){
    const body = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add(".pageContent");

    const title = document.createElement('h1');
    title.textContent = "This is a restaurant";

    const restaurantImage = document.createElement('img')

    const descText = document.createElement('p');
    descText.textContent = "This is an amazing restaurant";

    body.appendChild(pageContent);
    pageContent.appendChild(title);
    pageContent.appendChild(restaurantImage);
    pageContent.appendChild(descText);
}


