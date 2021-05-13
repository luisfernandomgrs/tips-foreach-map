const names = ['Developer', 'C++', 'WSL', 'JavaScript'];

// modelo de um para demonstração
for (let i =0; i < names.length; i++){
  console.log(names[i], i);
}
console.log('------------------------');

// modelo de uso de um forEach
names.forEach((name, i, arrNames) => {
  console.log(name, ++i, ' de ', arrNames.length);
});
console.log('------------------------');

//
// nosso modelo personalizado de forEach
function myForEach(array, fParam) {
  for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    fParam(array[index], index, array);
  }
};

myForEach(names, (name, index) => {
  console.log(name, index);
});
console.log('==============================');

//
// Porque existe forEach e map, se ambos fazem a mesma coisa ?
// forEach permite executar uma função para cada item do array
// mas não retorna nenhum valor...
//
// no map podemos modificar o item, retornando um array diferente
// do original.
// Isso porque o map, permite rodar uma função que modifica o item
// do array, além de retornar uma lista diferente do original.

const retornoMap = names.map((name, index) => {
  return `<li>${name}</li>`
})
console.log(retornoMap);

console.log("<- <- <- <- <- <- <- <- <- <- <-")
function nossoMap(array, fParam) {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray.push(fParam(array[index], index));
  }

  return newArray;
};

const retornoNossoMap = nossoMap(names, (name, index) => {
  return `<li>${name}</li>`;
})

console.log(retornoNossoMap);