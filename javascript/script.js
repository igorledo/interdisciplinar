let pilha = [];
let fila = [];

// PILHA
function atualizarPilha() {
  const div = document.getElementById("pilha");
  div.innerHTML = "";
  pilha.forEach(item => {
    const el = document.createElement("div");
    el.className = "item";
    el.innerText = item;
    div.appendChild(el);
  });
}

function pushPilha() {
  const valor = document.getElementById("valorPilha").value;
  if (valor !== "") {
    pilha.push(valor);
    document.getElementById("valorPilha").value = "";
    atualizarPilha();
  }
}

function popPilha() {
  pilha.pop();
  atualizarPilha();
}

// FILA
function atualizarFila() {
  const div = document.getElementById("fila");
  div.innerHTML = "";
  fila.forEach(item => {
    const el = document.createElement("div");
    el.className = "item";
    el.innerText = item;
    div.appendChild(el);
  });
}

function enqueueFila() {
  const valor = document.getElementById("valorFila").value;
  if (valor !== "") {
    fila.push(valor);
    document.getElementById("valorFila").value = "";
    atualizarFila();
  }
}

function dequeueFila() {
  fila.shift();
  atualizarFila();
}
