const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// 1
// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addParam = (obj, key, value) => obj[key] = value;

addParam(lesson2, 'turno', 'manhã')

console.table(lesson2);

// 2
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj);

console.log(listKeys(lesson2));

//3
//Crie uma função para mostrar o tamanho de um objeto.

const countListKeys = (obj) => Object.keys(obj).length;

console.log(countListKeys(lesson2));

//4
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const keysOfObj = (obj) => Object.values(obj);

console.log(keysOfObj(lesson2));

//5
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3})

console.log(allLessons);


//6
// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumStudents = (obj) => {
  let lessons = Object.keys(obj);
  sum = 0;
  for (let index = 0; index < lessons.length; index += 1) {
    sum += obj[lessons[index]].numeroEstudantes;
  }
  return sum;
}

console.log(sumStudents(allLessons));

//7
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValue = (obj, position) => {
  let arr = Object.values(obj);
  return arr[position - 1]
}


//8
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

const checkKeyValue = (obj, key, value) => obj[key] === value ? true : false

console.log(checkKeyValue(lesson1, 'materia', 'Matemática',));