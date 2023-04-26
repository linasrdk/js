function add(x, y) {
  return x + y;
}
console.log(add(3, 5));

function diff(x, y) {
  return x - y;
}
console.log(diff(19, 7));

function multiply(x, y) {
  return x * y;
}
console.log(multiply(4, 6));

function divide(x, y) {
  if (y === 0) {
    alert("На нуль ділити не можна");
    return;
  }
  return x / y;
}
console.log(divide(12, 2));
console.log(divide(5, 0));



