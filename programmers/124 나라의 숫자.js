function solution(n) {
  let threeple = 1;

  while (n >= Math.pow(3, threeple)) {
    n -= Math.pow(3, threeple);
    threeple++;
  }
  console.log(n);
  console.log(threeple);
  let number = new Array(threeple).fill(0);
  if (!n) return new Array(threeple - 1).fill(4).join("");
  let index = 0;
  while (n >= 1) {
    number[index] = n % 3;
    if (n / 3 === 1) break;
    n = Math.floor(n / 3);
    index++;
  }
  console.log(number);
  for (let i = 0; i < threeple; i++) {
    if (i === 0) {
      if (number[i] === 0) {
        number[i] = 4;
        if (threeple !== 1) number[i + 1] -= 1;
      }
    } else {
      if (number[i] === 2 || number[i] === -1) {
        number[i] = 4;
      } else {
        number[i] += 1;
      }
    }
  }
  return number.reverse().join("");
}
