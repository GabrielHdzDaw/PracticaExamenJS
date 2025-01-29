// Respecto al listado, será prácticamente idéntico a lo que hicimos en clase, a nivel de código.
// La única diferencia radica en que en lugar de tener que coger la información mediante un fetch,
//  al que luego la hacemos un .json() para convertirlo en un objeto de javascript, yo os daré directamente
//   (en el enunciado) el código para crear el objeto de javascript, por lo que no os tendréis que preocupar
//    de esa parte. Lo importante es que sepas recorrer un array usando forEach y que seas capaz de crear y
//    clonar un <template> para poder ir añadiendo elementos.

// Respecto al formulario, sin dar demasiados detalles, será una calculadora de presupuesto.
// Básicamente, a partir del número de páginas y varios parámetros más, deberéis ser capaces
//  de calcular el presupuesto. Para practicar, crea un formulario con varios campos a rellenar,
//  como por ejemplo, número de páginas, calidad del papel, IVA... etc y prueba a coger todos
//  esos elementos y combinarlos para calcular un presupuesto. No te puedo dar más detalles
//    sin prácticamente darte el enunciado, pero asegúrate que te sientes cómodo cogiendo elementos
//     de un formulario y haciendo operaciones con ellos, incluyendo algún if-else según lo que se ha seleccionado, etc.

const albumes = [
  {
    title: "Mountain Landscape",
    description:
      "A breathtaking view of snow-capped mountains with a serene lake in the foreground.",
    imgUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Forest Path",
    description:
      "A peaceful trail through a dense, green forest with sunlight filtering through the trees.",
    imgUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Beach Sunset",
    description:
      "A stunning sunset over the ocean with waves gently crashing on the shore.",
    imgUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "City Skyline",
    description:
      "A modern city skyline at night, illuminated by colorful lights.",
    imgUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Desert Dunes",
    description:
      "Golden sand dunes stretching endlessly under a clear blue sky.",
    imgUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

document.addEventListener('DOMContentLoaded', () => {
    cargarAlbumes(albumes)
})

function cargarAlbumes(albumes) {
  const template = document.getElementById("template");

  albumes.forEach((element) => {
    const templateClone = template.content.cloneNode(true);
    templateClone.querySelector("h3").textContent = element.title;
    templateClone.querySelector("p").textContent = element.description;
    templateClone.querySelector("img").src = element.imgUrl;
    templateClone.querySelector("img").alt = element.description;
    document.getElementById("albumes").appendChild(templateClone);
  });
}


document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  calcularCoste();
});

function calcularCoste() {
  const coste = document.getElementById("coste");
  const paginas = document.getElementById("paginas");
  const calidad = document.getElementById("calidad");
  const iva = document.getElementById("iva");
  const costePorPagina = 0.10;
  const costeIva = 1.21;
  let costeTotal = paginas.value * costePorPagina * calidad.value;

  costeTotal = iva.checked ? costeTotal * costeIva : costeTotal;

  coste.textContent = `${costeTotal.toFixed(2)} €`;
}
