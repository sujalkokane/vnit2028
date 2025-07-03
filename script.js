let table = document.querySelector(".table");
let links = document.querySelectorAll("button");
let tableBody = document.querySelector("#table-body");
let selected = document.querySelector(".selected");
let msg = document.querySelector(".msg-container");
links.forEach((link) => {
  link.addEventListener("click", async (e) => {
    let action = e.target.getAttribute("data-action");
    let toggle = false;
    let response = null;
    switch (action) {
      case "cse":
        // logic for CSE
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/cse");
        break;
      case "ece":
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/ece");
        break;
      case "eee":
        // logic for EEE
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/eee");
        break;
      case "mec":
        // logic for Mechanical
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/mec");
        break;
      case "civil":
        // logic for Civil
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/civil");
        break;
      case "chem":
        // logic for Chemical
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/chem");
        break;
      case "meta":
        // logic for Metallurgy
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/meta");
        break;
      case "min":
        // logic for Mining
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/min");
        break;
      case "all":
        // logic for All
        selected.innerHTML = action;
        toggle = true;
        response = await fetch("https://vnit2028-backend.vercel.app/api/all");
        break;
      default:
        console.log("No action defined for this branch.");
    }
    if (!toggle) {
      msg.style.display = "flex";
    } else {
      msg.style.display = "none";
    }
    let data = await response.json();
    tableBody.innerHTML = "";
    data.forEach((student) => {
      let row = document.createElement("tr");
      let num = student.NO;
      if (action === "all") {
        num -= 1; // Adjust for all students
      }
      let bgStyle = num === 1 ? "background-color: gold;" : "";
      row.innerHTML = `
                  <td style="${bgStyle}">${num}</td>
                  <td style="${bgStyle}">${student.NAME}</td>
                  <td style="${bgStyle}">${student.ENROLLMENT_NO}</td>
                  <td style="${bgStyle}">${student.CHEM_SEM}</td>
                  <td style="${bgStyle}">${student.PHY_SEM}</td>
                  <td style="${bgStyle}">${student.CGPA}</td>
                `;
      tableBody.appendChild(row);
    });
    table.style.display = "block";
  });
});
let searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", () => {
  let filter = searchInput.value.toLowerCase();
  let rows = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let match = false;

    // Check each cell for the search value
    for (let j = 0; j < cells.length; j++) {
      let cellValue = cells[j].textContent || cells[j].innerText;
      if (cellValue.toLowerCase().indexOf(filter) > -1) {
        match = true;
        break;
      }
    }

    if (match) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});
