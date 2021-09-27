// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
function exerciseOne(n1, n2, n3) {
  const promise = new Promise((resolve, reject) => {
    if(isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      return reject(new Error('Informe apenas números'));
    }

    const result = (n1 + n2) * n3;
    if(result < 50) return reject(new Error('Valor muito baixo'));

    resolve(result);
  });

  return promise;

}

// exerciseOne(2, 2, 10)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message))


// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: 
// Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

// function exerciseTwo() {
//   const n1 = Math.floor(Math.random() * 100 + 1);
//   const n2 = Math.floor(Math.random() * 100 + 1);
//   const n3 = Math.floor(Math.random() * 100 + 1);

//   return exerciseOne(n1, n2, n3)
// }

// exerciseTwo()
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message))


// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

async function exerciseThree() {
  const n1 = Math.floor(Math.random() * 10 + 1);
  const n2 = Math.floor(Math.random() * 10 + 1);
  const n3 = Math.floor(Math.random() * 10 + 1);

  try {
    const result = await exerciseOne(n1, n2, n3)
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

exerciseThree();