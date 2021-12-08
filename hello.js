const sayHello = function (name) {
  console.log("Hello, " + name);
};

sayHello("Casey");

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
};

sayHelloToConsole("Casey");

const returnSayHello = function (name) {
  return "Hello, " + name;
};

const greeting = returnSayHello("Casey");
console.log(greeting);
