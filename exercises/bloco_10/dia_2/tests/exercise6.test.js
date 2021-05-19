// const { resolve } = require("node:path");

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const objAnimal = Animals.find(animal => animal.name === name)
    if(objAnimal) {
      return resolve(objAnimal)
    }
    reject('Nenhum animal com esse nome!')
  })
};

const getAnimal = (name) => {
  return findAnimalByName(name)
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      // expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});