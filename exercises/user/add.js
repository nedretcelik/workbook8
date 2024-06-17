"user strict";

const inputName = document.querySelector("#inputName");
const inputUsername = document.querySelector("#inputUsername");
const inputEmail = document.querySelector("#inputEmail");
const inputPhone = document.querySelector("#inputPhone");
const inputWebsite = document.querySelector("#inputWebsite");

const addNewUserButton = document.querySelector("#addNewUserButton");



function addUser() {
  let user = {
    name: inputName.value,
    username: inputUsername.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    website: inputWebsite.value,
  };
  let requestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  fetch("http://localhost:3000/users/", requestInit)
    .then((response) => response.json())
    .then((user) => {
      showMessage("Successfully added");
    });
}

addNewUserButton.onclick = addUser;
