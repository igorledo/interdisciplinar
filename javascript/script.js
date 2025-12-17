let pilha = [];

function atualizarTela() {
  const div = document.getElementById("pilha");
  div.innerHTML = "";

  pilha.forEach(item => {
    const elemento = document.createElement("div");
    elemento.className = "item";
    elemento.innerText = item;
    div.appendChild(elemento);
  });
}

function adicionar() {
  const valor = document.getElementById("valor").value;
  if (valor !== "") {
    pilha.push(valor);
    document.getElementById("valor").value = "";
    atualizarTela();
  }
}

function remover() {
  pilha.pop();
  atualizarTela();
}
