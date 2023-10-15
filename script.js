const frm = document.getElementById("form");
const table = document.getElementById("table");

frm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(frm);
    const newRow = table.insertRow(-1);

    for (const value of formData.values()) {
        const cell = newRow.insertCell();
        cell.textContent = value;
    }

    form.reset();
});