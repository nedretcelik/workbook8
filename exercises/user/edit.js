
const inputName = document.querySelector("#inputName");
const inputUsername = document.querySelector("#inputUsername");
const inputEmail = document.querySelector("#inputEmail");
const inputPhone = document.querySelector("#inputPhone");
const inputWebsite = document.querySelector("#inputWebsite");

const editUserButton = document.querySelector("#editUserButton");
let id = -1;

window.onload = function () {
  const urlParams = new URLSearchParams(location.search);


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

function editUser() {
  let user = {
    name: inputName.value,
    username: inputUsername.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    website: inputWebsite.value,
  };
  let requestInit = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  fetch("http://localhost:3000/users/" + id, requestInit)
    .then((response) => response.json())
    .then((user) => {
      console.log(user)
    });
}

editUserButton.onclick = editUser;
