function myBio(firstName, lastName, ...otherInfo) {
    console.log(firstName);
    console.log(lastName);
    console.log(otherInfo);
}

myBio("Fernando","Lira","FLag","Jscript","Rest");

const dados = ["Fernando", "Lira", "Flag"];

function escreverDados(firstName, lastName, company) {
    console.log(`${firstName} ${lastName} - ${company}`);
}

escreverDados(dados);