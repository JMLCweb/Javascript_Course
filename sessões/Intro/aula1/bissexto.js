function eBissexto(ano) {
  if (ano % 4 != 0) {
    return false;
  }
  if (ano % 100 != 0) {
    return true;
  }
  return ano % 400 == 0;
}
if (eBissexto(2024)) {
  console.log("É bissexto!");
} else {
  console.log("Não é bissexto!");
}
