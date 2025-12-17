// ===== PILHA =====
let pilha = [];
let maxPilha = 0;

function mostrarCodigo(id, texto) {
  document.getElementById(id).innerText = texto;
}

function criarPilha() {
  maxPilha = Number(document.getElementById('tamPilha').value);
  pilha = [];
  document.getElementById('visPilha').innerText = '';
  document.getElementById('msgPilha').innerText = 'Pilha criada com tamanho ' + maxPilha;
  mostrarCodigo('codePilha', `maxPilha = ${maxPilha};\npilha = [];`);
}

function push() {
  if (pilha.length >= maxPilha) {
    document.getElementById('msgPilha').innerText = 'Pilha cheia';
    mostrarCodigo('codePilha', 'if (pilha.length >= maxPilha)');
    return;
  }
  const valor = document.getElementById('valPilha').value;
  if (!valor) return;
  pilha.push(valor);
  atualizarPilha();
  mostrarCodigo('codePilha', 'pilha.push(valor);');
}

function pop() {
  if (pilha.length === 0) {
    document.getElementById('msgPilha').innerText = 'Pilha vazia';
    mostrarCodigo('codePilha', 'if (pilha.length === 0)');
    return;
  }
  pilha.pop();
  atualizarPilha();
  mostrarCodigo('codePilha', 'pilha.pop();');
}

function exibirPilha() {
  document.getElementById('msgPilha').innerText = 'Pilha: [ ' + pilha.join(', ') + ' ]';
  mostrarCodigo('codePilha', 'console.log(pilha);');
}

function resetPilha() {
  pilha = [];
  atualizarPilha();
  document.getElementById('msgPilha').innerText = 'Pilha reiniciada';
  mostrarCodigo('codePilha', 'pilha = [];');
}

function atualizarPilha() {
  document.getElementById('visPilha').innerText = pilha.slice().reverse().join('\n');
}

// ===== FILA =====
let fila = [];
let maxFila = 0;

function criarFila() {
  maxFila = Number(document.getElementById('tamFila').value);
  fila = [];
  document.getElementById('visFila').innerText = '';
  document.getElementById('msgFila').innerText = 'Fila criada com tamanho ' + maxFila;
  mostrarCodigo('codeFila', `maxFila = ${maxFila};\nfila = [];`);
}

function enqueue() {
  if (fila.length >= maxFila) {
    document.getElementById('msgFila').innerText = 'Fila cheia';
    mostrarCodigo('codeFila', 'if (fila.length >= maxFila)');
    return;
  }
  const valor = document.getElementById('valFila').value;
  if (!valor) return;
  fila.push(valor);
  atualizarFila();
  mostrarCodigo('codeFila', 'fila.push(valor);');
}

function dequeue() {
  if (fila.length === 0) {
    document.getElementById('msgFila').innerText = 'Fila vazia';
    mostrarCodigo('codeFila', 'if (fila.length === 0)');
    return;
  }
  fila.shift();
  atualizarFila();
  mostrarCodigo('codeFila', 'fila.shift();');
}

function exibirFila() {
  document.getElementById('msgFila').innerText = 'Fila: [ ' + fila.join(', ') + ' ]';
  mostrarCodigo('codeFila', 'console.log(fila);');
}

function resetFila() {
  fila = [];
  atualizarFila();
  document.getElementById('msgFila').innerText = 'Fila reiniciada';
  mostrarCodigo('codeFila', 'fila = [];');
}

function atualizarFila() {
  document.getElementById('visFila').innerText = fila.join('\n');
}
