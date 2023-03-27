calcularSequenciaFibonacci(0, 1)

function calcularSequenciaFibonacci(n1, n2) {
  for (let i = 0; i < 10; i++) {
    var sequenciaFibonacci = [2, 3, 5, 8, 13, 21, 34,55,89,144]
    var soma = n1 + n2
    var n3 = soma
    var sequencia = n2 + n3
    n1 = n2
    n2 = n3
    console.log(sequencia)

    
    if(sequencia == sequenciaFibonacci[i]) {
      console.log('Esse núemero pertence a frequência de Fibonacci')
    } else {
      console.log('Esse número não pertence a sequência de Fibonacci')
    }
  }
}