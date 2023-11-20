function pessoa() {
  this.idade = 0;

  setInterval(
    function () {
      // setInterval
      this.idade++;
      console.log(this.idade);
    }.bind(this), // para contextualizar* atençao à posição
    1000
  );
}
new pessoa();
// ou
function pessoa() {
  this.idade = 0;
  const self = this;
  setInterval(function () {
    // setInterval
    self.idade++;
    console.log(self.idade);
  }, 1000);
}
new pessoa();
