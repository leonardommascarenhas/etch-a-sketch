const grid = document.querySelector(".sketch");

function createRow() {
  for (let i = 1; i <= 16; i++) {
    const htmlString = document.createElement("div");
    htmlString.classList.add("bla");
    htmlString.innerHTML = `${i}`;
    grid.appendChild(htmlString);
  }
}

function createColumn() {
  let i = 0;
  while (i < 16) {
    createRow();
    i++;
  }
}

createColumn();
