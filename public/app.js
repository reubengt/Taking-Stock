let searchButton = document.querySelector(".search-button");


let xhr = new XMLHttpRequest();
let response;

const query = e => {
  let searchValue = document.querySelector(".dropdown").value; //search query value taken from select dropdown
  let queryUrl = `/search?q=${searchValue}`;
  //clear price container
  let priceContainer = document.querySelector('.price-section');
  //empty out price container
  while (priceContainer.firstChild) {
        priceContainer.removeChild(priceContainer.firstChild)
      }
  //loading animation when button is clicked
  let loadingAnimation = document.createElement('iframe');
  loadingAnimation.setAttribute("src", "public/bounce.html");
  priceContainer.appendChild(loadingAnimation);
  priceContainer.style.backgroundImage = "none";
  priceContainer.style.backgroundColor = "grey";

  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
     response = JSON.parse(xhr.responseText);
     //remove loading animation when response is ready
     priceContainer.removeChild(loadingAnimation);
     //add background image related to search value when response is ready
     priceContainer.classList.remove('default-image');
     priceContainer.classList.add(`${searchValue}`);
     priceContainer.style.backgroundColor = "none";
     let span = document.createElement('span');
    span.textContent = response;
    span.classList.add('price-span');
    priceContainer.appendChild(span);
    }
  }
  xhr.open("GET", queryUrl, true);
  xhr.send();


};
searchButton.addEventListener('click', query); //query function called on submit
