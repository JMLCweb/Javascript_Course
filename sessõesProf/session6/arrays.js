const capitais = ['Lisboa','Madrid','Londres','Paris'];

capitais.pop();
console.log(capitais);

capitais.unshift('Bruxelas');
console.log(capitais);

capitais.push('Qualquer');
console.log(capitais);

capitais.splice(2,1);
console.log(capitais);

const capitais2 = capitais.slice(2);
console.log(capitais2);
