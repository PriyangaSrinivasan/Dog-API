// Class selector
const card = document.querySelector(".card");
const button = document.querySelector(".getimage-btn");
// create event function 
button.addEventListener("click", () => {
  const response = fetch("https://dog.ceo/api/breeds/image/random");
//  fetch and promise
  response
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      card.innerHTML = `
    <img src="${result.message}">
    `;
    })
    .catch((error) => {
      console.log(error);
    });
});
