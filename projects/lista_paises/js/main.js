const paises = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (response.status != 200) {
    throw new Error("Erro na leitura de dados");
  }
  const data = await response.json();
  return data;
};

const html = {
  get(element) {
    return document.querySelector(element);
  },
};

const buildPagination = (totalPages) => {
  var numPagination = "";
  for (let i = 1; i <= totalPages; i++) {
    numPagination += `
<span>${i}</span>
`;
  }
  numeros.innerHTML = numPagination;
  console.log(numPagination);
};

var countriesList = [];
const offset = 13;

const numeros = document.querySelector("#pagination");

numeros.addEventListener("click", (e) => {
  if (e.target.tagName == "SPAN") {
    console.log(e.target.innerText);
    document.querySelector("tbody").innerHTML = buildCountries(
      countriesList,
      e.target.innerText
    );
  }
});

const buildCountries = (countries, pagina = 1) => {
  var paises = "";
  const inicial = (pagina - 1) * offset + 1;
  const final = pagina * offset;

  for (let i = inicial - 1; i < final && i < countriesList.length; i++) {
    paises += `
          <tr>
            <th scope="row">${i + 1}</th>
            <td>${countries[i].name.common}</td>
            <td>${countries[i].region}</td>
            <td>${countries[i].subregion}</td>
            <td><img src="${countries[i].flags.png}" width=50px /></td>
          </tr>
          `;
  }
  return paises;
};

paises()
  .then((data) => {
    countriesList = [...data];
    document.querySelector("tbody").innerHTML = buildCountries(data);
    document.querySelector(".loader").classList.toggle("hide");
    document.querySelector(".countries").classList.toggle("hide");

    // Distribuir array por paginas
    // pag 1
    // offset = 20
    // inicial = 1 ((pagina atual - 1) * offset) + 1 -1
    // final = 20 (pagina * offset)
    // pag 2
    // inicial = 21 ((pagina atual - 1) * offset) + 1 - 21
    // final = 40
    // pag 3
    // inicial = 41 ((pagina atual - 1) * offset) + 1 - 41
    const paginas = Math.ceil(countriesList.length / offset);
    buildPagination(paginas);
  })
  .catch((err) => console.log("Surgiu um erro:", err.message));

const sortCountries = document.querySelector("#sort");
sortCountries.addEventListener("click", (e) => {
  countriesList.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  document.querySelector("tbody").innerHTML = buildCountries(countriesList);
});
const celula = document.querySelectorAll("td");
console.log(celula);
