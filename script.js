let table = document.querySelector(".table");
let links = document.querySelectorAll(".links");
let tableBody = document.querySelector("#table-body");
let selected = document.querySelector(".selected");
links.forEach((link) => {
  link.addEventListener("click", async (e) => {
    let action = e.target.getAttribute("data-action");
    let response = null;
    switch (action) {
      case "cse":
        // logic for CSE
        selected.innerHTML = action;
        response = await fetch("https://vnit2028-backend.vercel.app/api/cse");
        break;
      case "ece":
        selected.innerHTML = action;
        response = await fetch("https://vnit2028-backend.vercel.app/api/ece");
        break;
      case "eee":
        // logic for EEE
        selected.innerHTML = action;
        response = await fetch("https://vnit2028-backend.vercel.app/api/eee");
        break;
      case "mec":
        // logic for Mechanical
        selected.innerHTML = action;
        response = await fetch("https://vnit2028-backend.vercel.app/api/mec");
        break;
      case "civil":
        // logic for Civil
        selected.innerHTML = action;
        response = await fetch("https://vnit2028-backend.vercel.app/api/civil");
        break;
      case "chem":
        // logic for Chemical
        selected.innerHTML = action;
        response = await fetch("https://vnit2028-backend.vercel.app/api/chem");
        break;
      case "meta":
        // logic for Metallurgy
        selected.innerHTML = action;
        response = await fetch("https://vnit2028-backend.vercel.app/api/meta");
        break;
      case "min":
        // logic for Mining
        selected.innerHTML = action;
        response = await fetch("https://vnit2028-backend.vercel.app/api/min");
        break;
      default:
        console.log("No action defined for this branch.");
    }
    let data = await response.json();
    tableBody.innerHTML = "";
    data.forEach((student) => {
      let row = document.createElement("tr");
      row.innerHTML = `
                  <td>${student.NO}</td>
                  <td>${student.NAME}</td>
                  <td>${student.ENROLLMENT_NO}</td>
                  <td>${student.CHEM_SEM}</td>
                  <td>${student.PHY_SEM}</td>
                  <td>${student.CGPA}</td>
                `;
      tableBody.appendChild(row);
    });
    table.style.display = "block";
  });
});
