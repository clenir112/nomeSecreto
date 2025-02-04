function sortearAmigo() {
  const listaAmigos = document.getElementById("listaAmigos");
  const amigos = listaAmigos.children;
  let resultadoLista; 

  if (amigos.length === 0) {
    alert('Insira um nome válido para sortear!');
  } else {
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado].textContent;

    resultadoLista = document.getElementById("resultado"); // Atribui o valor aqui
    resultadoLista.innerHTML = "";
    const novoResultado = document.createElement("li");
    novoResultado.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
    resultadoLista.appendChild(novoResultado);
  }
}

function adicionarAmigo() {
  const nomeInput = document.getElementById("amigo");
  const nome = nomeInput.value.trim();

  if (nome !== "") {
    const listaAmigos = document.getElementById("listaAmigos");
    const novoAmigo = document.createElement("li");
    novoAmigo.textContent = nome;
    listaAmigos.appendChild(novoAmigo);
    nomeInput.value = "";
  }
}

function limparLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  while (listaAmigos.firstChild) {
    listaAmigos.removeChild(listaAmigos.firstChild);
  }
}
