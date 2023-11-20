const numeros = [4, 2, 5, 6];

const dobroForEach = [];
numeros.forEach( valor => dobroForEach.push(valor*2));
console.log(dobroForEach);

//Equivalente com MAP
const dobroMap = numeros.map( valor => valor * 2);
console.log(dobroMap);