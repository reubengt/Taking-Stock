let searchButton = document.querySelector("search-button");
let searchValue = document.querySelector("dropdown").value; //search query value taken from select dropdown

///search?q=
searchButton.addEventListener('click', query); //query function called on submit

let xhr = new XMLHttpRequest();

const query = searchValue => {
  let queryUrl = `/search?q=${searchValue}`;
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
    } else {
      console.error(xhr.responseText);
    }
    return response;
  }
  xhr.open("GET", queryUrl, true);
  xhr.send();
  return response;
};
