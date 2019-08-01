let searchButton = document.querySelector(".search-button");


let xhr = new XMLHttpRequest();
let response;

const query = e => {
  let searchValue = document.querySelector(".dropdown").value; //search query value taken from select dropdown
  let queryUrl = `/search?q=${searchValue}`;
  console.log(searchValue);
  //clear price container
  let priceContainer = document.querySelector('.price-section');
  while (priceContainer.firstChild) {
       priceContainer.removeChild(priceContainer.firstChild)
      }

  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
     response = JSON.parse(xhr.responseText);
     console.log(response, 'hello')
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



