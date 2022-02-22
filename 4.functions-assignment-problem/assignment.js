
const sayHello = (name) => {
  console.log('Hi ' + name);
}

const sayHello2 = (message, name) => {
  console.log(message + ' ' + name);
}

const sayHello3 = () => {
  console.log('Hi ' + 'Denis');
}

const sayHello4 = (name) => {
  return('Hi ' + name);
}

const sayHello5 = (name, message = 'Hello') => {
  return(message + ' ' + name);
}

sayHello('Denis');
sayHello2('Hello', 'Denis');
sayHello3();
console.log(sayHello4('Denis!'));
console.log(sayHello5('Denis!'));

function checkInput(cb, ...strings){
  let emptyText = false;
  for(const text of strings){
    if(!text) {
    emptyText = true;
    break;
    } 
  }
  if(!emptyText){
    cb();
  }
}
 
checkInput(
    () => {
      console.log('No empty text.')
    },
    '123',
    'hi',
    'ss',
    'zaza'
);
