let color = "black";

function criadorGrid(size) {
  let ammount = size * size;
  let canva = document.querySelector(".canva");
  canva.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  canva.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  for (let i = 0; i < ammount; i++) {
    let pixel = document.createElement("div");
    pixel.addEventListener("mousemove", mudacor);
    pixel.backgroundColor = "white";
    canva.insertAdjacentElement("beforeend", pixel);
  }
}

function mudacor() {
  this.style.backgroundColor = color;
}
function escolhaCor(escolha) {
  color = escolha;
}
function limpar() {
  let canva = document.querySelector(".canva");
  canva.innerHTML = "";
  criadorGrid(24);
}
const botao = document.querySelector(".reset");
botao.addEventListener("click", limpar);
criadorGrid(24);
