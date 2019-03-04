module.exports = function getZerosCount(number, base) {
  function basicDividers(base) {                                              //получаю простые делители заданной системы исчисления
    let delitel = 2;
    let allDeliteli = [];
    let base2 = base;

    while (base2 != 1) {
        if (base2 % delitel == 0) {
            allDeliteli.push(delitel);
            base2 = base2 / delitel;
        } else if (base2 % delitel !=0 ) delitel += 1;
    }
    return allDeliteli;
  }
  console.log(basicDividers(base));
  let allDividers = basicDividers(base);

  function originalDividers(allDividers){                                      //получаю сколько чисел входят в массив с простыми делителями
    let newArSize = 0;
    for (let i = 0; i < allDividers.length; i++) {
        if (allDividers[i] != allDividers[i+1]) newArSize +=1;
    }
    return newArSize;
  }
  let numberOfDividers = originalDividers(allDividers)
  console.log(numberOfDividers);

  function powersOfDividers(allDividers, numberOfDividers){                   //функция для получения степеней делителей(сколько раз делитель входит в число)
    let powers = [];
    let j = 0;
    for (let i = 0; i < numberOfDividers; i++) {
        powers.push(1);
    }
    for (let i = 0; i < allDividers.length; i++) {
        if (allDividers[i] == allDividers[i+1]){
            powers[j] +=1;
        }
        else j+=1;
    }
    return powers;
  }                                                                            //конец функции
  powers = powersOfDividers(allDividers, numberOfDividers);
  console.log(powers);

  function normalDividers(allDividers){                                       //функия убирает одинаковые делители из массива
    let ar = [];
    for (let i = 0; i < allDividers.length; i++) {
      if (allDividers[i] != allDividers[i+1]) ar.push(allDividers[i]);
    }
    return ar;
  }
  let dividersOfBase = normalDividers(allDividers);
  console.log(dividersOfBase);

  function dividersOfNum(number, dividersOfBase, numberOfDividers, powers){
    let num = 0;
    let i = 1;
    let delitel = dividersOfBase[numberOfDividers-1];
    while (delitel < number) {
        num += Math.trunc(number/ delitel);
        delitel *= dividersOfBase[numberOfDividers-1];
    }
    return num / powers[numberOfDividers-1];
  }

  let result = dividersOfNum(number, dividersOfBase, numberOfDividers, powers);
  console.log(result);  
  return Math.trunc(result);
}