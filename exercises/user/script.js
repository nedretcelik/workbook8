"user strict";

const usersDetailTableBody = document.querySelector("#usersDetailTableBody");

function fetchAndDisplayUserData() {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
      for (const user of users) {
        let row = usersDetailTableBody.insertRow();

        let cell0 = row.insertCell();
        cell0.innerText = "";

        row.appendChild(cell0);

        let cell1 = row.insertCell();
        cell1.innerText = user.name;

        row.appendChild(cell1);

        let cell2 = row.insertCell();
        cell2.innerText = user.username;

        row.appendChild(cell2);

        let cell3 = row.insertCell();
        cell3.innerText = user.email;

        row.appendChild(cell3);

        let cell4 = row.insertCell();
        cell4.innerText = user.phone;

        row.appendChild(cell4);

        let cell5 = row.insertCell();
        cell5.innerText = user.website;

        row.appendChild(cell5);

        let anchorEdit = document.createElement("a");
        anchorEdit.href = `edit.html?userid=${user.id}`;
        anchorEdit.text = "Edit";
        let cell6 = row.insertCell();
        cell6.appendChild(anchorEdit);

        let anchorDelete = document.createElement("a");
        anchorDelete.href = `delete.html?userid=${user.id}`;
        anchorDelete.text = "Delete";
        let cell7 = row.insertCell();
        cell7.appendChild(anchorDelete);
      }
    });
}

fetchAndDisplayUserData();
