let myName = 'Bas';

const mySurname = 'Bargagli';

function printMyName(name){
  console.log(name)
}

//if only one argument, you can ommit parenthesis
const printMySurname = (surname) => {
  console.log(surname)
}

printMyName(myName);
printMySurname(mySurname);

//in functions with one return, you can put it right away
const multiplyBySelf = number => number * number;
console.log(multiplyBySelf(2))

//classes
class Human{
    gender = 'Male'
    
    printGender = () => {
      console.log(this.gender)
    }
}
  
class Person extends Human{
    constructor(name){
      super();
      this.name = name;
}
    
    printMyName(){
      console.log(this.name)
    }
}
  
const Bas = new Person('Bas');
Bas.printMyName();
Bas.printGender();

//rest and spread
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5];
console.log(newNumbers);

const person = {
  name: 'Bas',
};

const newPerson = {
  ...person,
  surname: 'Bargagli'
};
console.log(newPerson)


const filter = (...args) => {
  return args.filter(el => el === 1);
}
console.log(filter(...newNumbers));

[num1, ,num3] = numbers;
console.log(num1, num3);

//array funcs
const doubleNumArray = numbers.map((num) => {
    return num * 2;
})
console.log(doubleNumArray)
