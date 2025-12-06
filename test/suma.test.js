/**
 * @jest-environment jsdom
 */

const { sumar, agregarItem } = require("../src/app.js");

test("la función sumar debe devolver la suma de dos números", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("agregarItem debe agregar un <li> a la lista", () => {
  document.body.innerHTML = `
    <ul id="lista"></ul>
  `;

  agregarItem("Hola SENA");

  const lista = document.getElementById("lista");

  expect(lista.children.length).toBe(1);
  expect(lista.children[0].textContent).toBe("Hola SENA");
});
