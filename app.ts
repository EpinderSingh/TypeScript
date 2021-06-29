function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result is:' + num);
  const p = document.querySelector('p');
  p.innerHTML = 'Result is : ' + num;
}

printResult(add(5, 10));
