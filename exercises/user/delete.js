"use strict";

const inputName = document.querySelector("#inputName");
const inputUsername = document.querySelector("#inputUsername");
const inputEmail = document.querySelector("#inputEmail");
const inputPhone = document.querySelector("#inputPhone");
const inputWebsite = document.querySelector("#inputWebsite");

const deleteUserButton = document.querySelector("#deleteUserButton");

const urlParams = new URLSearchParams(location.search);
let id = -1;

window.onload = function () {
  if (urlParams.has("userid") === true) {
    id = urlParams.get("userid");
    loadUsers(id);
  }
  function loadUsers(id) {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        inputName.value = user.name;
        inputUsername.value = user.username;
        inputEmail.value = user.email;
        inputPhone.value = user.phone;
        inputWebsite.value = user.website;
      });
  }
};

function deleteUsers() {
  let requestInit = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  fetch("http://localhost:3000/users/" + id, requestInit)
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
    });
}

deleteUserButton.onclick = deleteUsers;
