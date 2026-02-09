let pilha = [];
let maxPilha = 0;

let fila = [];
let maxFila = 0;

function mostrarCodigo(id, texto) {
  document.getElementById(id).innerText = texto;
}


function atualizarCodigoPilha() {
  mostrarCodigo(
    'codePilha',
    `maxPilha = ${maxPilha};\npilha = [${pilha.join(', ')}];`
  );
}

function criarPilha() {
  maxPilha = Number(document.getElementById('tamPilha').value);
  pilha = [];
  atualizarPilha();
  atualizarCodigoPilha();
  document.getElementById('msgPilha').innerText =
    'Pilha criada com tamanho ' + maxPilha;
}

function push() {
  if (pilha.length >= maxPilha) {
    document.getElementById('msgPilha').innerText = 'Pilha cheia';
    return;
  }
  const valor = document.getElementById('valPilha').value;
  if (!valor) return;

  pilha.push(valor);
  atualizarPilha();
  atualizarCodigoPilha();
  document.getElementById('msgPilha').innerText = `Inserido: ${valor}`;
}

function pop() {
  if (pilha.length === 0) {
    document.getElementById('msgPilha').innerText = 'Pilha vazia';
    return;
  }
  const valor = pilha.pop();
  atualizarPilha();
  atualizarCodigoPilha();
  document.getElementById('msgPilha').innerText = `Removido: ${valor}`;
}

function exibirPilha() {
  document.getElementById('msgPilha').innerText =
    'Pilha: [ ' + pilha.join(', ') + ' ]';
}

function resetPilha() {
  pilha = [];
  atualizarPilha();
  atualizarCodigoPilha();
  document.getElementById('msgPilha').innerText = 'Pilha reiniciada';
}

function atualizarPilha() {
  const vis = document.getElementById('visPilha');
  vis.innerHTML = '';
  for (let i = pilha.length - 1; i >= 0; i--) {
    const linha = document.createElement('div');
    linha.className = 'linha-pilha';
    linha.innerHTML = `
      <span class="indice">${i}</span>
      <div class="caixa">${pilha[i]}</div>
      ${i === pilha.length - 1 ? '<span class="topo-inline">← topo</span>' : ''}
    `;
    vis.appendChild(linha);
  }
}

/* ===== FILA ===== */
function atualizarCodigoFila() {
  mostrarCodigo(
    'codeFila',
    `maxFila = ${maxFila};\nfila = [${fila.join(', ')}];`
  );
}

function criarFila() {
  maxFila = Number(document.getElementById('tamFila').value);
  fila = [];
  atualizarFila();
  atualizarCodigoFila();
  document.getElementById('msgFila').innerText =
    'Fila criada com tamanho ' + maxFila;
}

function enqueue() {
  if (fila.length >= maxFila) {
    document.getElementById('msgFila').innerText = 'Fila cheia';
    return;
  }
  const valor = document.getElementById('valFila').value;
  if (!valor) return;

  fila.push(valor);
  atualizarFila();
  atualizarCodigoFila();
  document.getElementById('msgFila').innerText = `Inserido: ${valor}`;
}

function dequeue() {
  if (fila.length === 0) {
    document.getElementById('msgFila').innerText = 'Fila vazia';
    return;
  }
  const valor = fila.shift();
  atualizarFila();
  atualizarCodigoFila();
  document.getElementById('msgFila').innerText = `Removido: ${valor}`;
}

function exibirFila() {
  document.getElementById('msgFila').innerText =
    'Fila: [ ' + fila.join(', ') + ' ]';
}

function resetFila() {
  fila = [];
  atualizarFila();
  atualizarCodigoFila();
  document.getElementById('msgFila').innerText = 'Fila reiniciada';
}

function atualizarFila() {
  const vis = document.getElementById('visFila');
  vis.innerHTML = '';

  fila.forEach((valor, i) => {
    const container = document.createElement('div');
    container.className = 'item-fila';
    container.innerHTML = `
      <div class="caixa-fila">
        <div class="label">
          ${i === 0 ? 'início' : ''} ${i === fila.length - 1 ? 'fim' : ''}
        </div>
        <div class="valor">${valor}</div>
      </div>
      <div class="indice">${i}</div>
    `;
    vis.appendChild(container);
  });
}


function trocarTema() {
  document.body.classList.toggle('claro');
}
