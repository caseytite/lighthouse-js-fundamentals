const range = function (start, end, step) {
  let newArray = [];
  for (let i = start; i <= end; i = i + step) {
    newArray.push(i);
  }
  return newArray;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
