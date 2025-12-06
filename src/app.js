function sumar(a, b) {
  return a + b;
}

function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

module.exports = { sumar, agregarItem };
