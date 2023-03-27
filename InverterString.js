function inverterPalavra(palavra) {
  var resultado = '';
  for (let i = palavra.length - 1; i >= 0; i--) {
    resultado = resultado + palavra[i];
  }
  return resultado;
}

console.log(inverterPalavra('Alex'))