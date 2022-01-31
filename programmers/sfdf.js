function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      // 제곱근을 찾은 경우 (제곱의 값이 n과 동일한 경우)
      answer = i + 1;
      return answer * answer;

      // answer ** 2  -- 거듭제곱 연산자
      // Math.pow( answer, 2 )  -- 제곱 메소드
    }
  }
  // 제곱근을 찾지 못한 경우 (-1 을 리턴)
  return answer;
}
