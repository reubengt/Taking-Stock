let searchButton = document.querySelector(".search-button");
let priceContainer = document.querySelector('.price-section');
let previousBackgroundClass="default-image";
let xhr = new XMLHttpRequest();
let response;

const query = () => {
  let commodity= document.querySelector(".dropdown").value; //search query value taken from select dropdown
  let queryUrl = `/search?q=${commodity}`;
  //empty out price container
  clearPriceContainer();
  //loading animation when button is clicked
  let animation = document.createElement('iframe');
  addLoadingAnimation(animation);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
     response = JSON.parse(xhr.responseText);
     //remove loading animation when response is ready
     removeLoadingAnimation(animation);
     //add background image related to search value when response is ready
     addBackgroundImage(commodity);
     //add price value to page
     addPriceValue(response);
    }
  }
  xhr.open("GET", queryUrl, true);
  xhr.send();
}


searchButton.addEventListener('click', query); //query function called on submit

let addLoadingAnimation = (animation) => {
  //add animation background
  priceContainer.classList.add('loading-background');
  //add loading animation
  animation.classList.add('loading-animation');
  animation.setAttribute("src", "public/bounce.html");
  priceContainer.appendChild(animation);
}

let removeLoadingAnimation = (animation) => {
  //remove loading animation when response is ready
  priceContainer.removeChild(animation);
  //remove animation background
  priceContainer.classList.remove('loading-background');
}

let addPriceValue = (price) => {
  let span = document.createElement('span');
  span.textContent = price;
  span.classList.add('price-span');
  priceContainer.appendChild(span);
}

let clearPriceContainer = () => {
  //empty out price container
  while (priceContainer.firstChild) {
        priceContainer.removeChild(priceContainer.firstChild)
      }
  //remove old background image(removes default image on first run)
  priceContainer.classList.remove(previousBackgroundClass);
}

let addBackgroundImage = (commodity) => {
  //add class for background image
  priceContainer.classList.add(`${commodity}`);
  //specify class to be removed when new request is made
  previousBackgroundClass=commodity;
}
