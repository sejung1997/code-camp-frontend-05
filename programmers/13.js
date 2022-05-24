function solution(w, h) {
  const x = Math.min(w, h);
  const y = Math.max(w, h);
  if (y % x === 0) return x * y - y;
  let a = x;
  for (let i = 2; i <= x / 2; i++) {
    if (x % i !== 0) return;
    else {
      if ((y * i) % x === 0) {
        a = i;
        break;
      }
    }
  }

  return x * y - (((y * a) / x + a - 1) * x) / a;
}
