const capitais = ["Lisboa", "Paris", "Londres", "Madrid", "Amorim"];
capitais.shift();
console.log(capitais);
capitais.splice(2, 1);
console.log(capitais);

const capitais2 = capitais.slice(2);
console.log(capitais2);
