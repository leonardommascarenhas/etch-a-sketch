function criadorGrid(size) {
  let canva = document.querySelector(".canva");
  canva.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  canva.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  for (let i = 0; i < 256; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canva.insertAdjacentElement("beforeend", pixel);
  }
}

const mudaCor = document.querySelector(".canva");

mudaCor.addEventListener("mousemove", mudacor);

function mudacor(e) {
  if (e.target.classList.contains("pixel")) {
    let cor = document.querySelector(".color");
    e.target.style.backgroundColor = cor.value;
  }
}

function limpar() {
  let canva = document.querySelector(".canva");
  canva.innerHTML = "";
  criadorGrid(16);
}
const botao = document.querySelector(".reset");
botao.addEventListener("click", limpar);
criadorGrid(16);
