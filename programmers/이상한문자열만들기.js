function solution(s) {
  let answer = "";
  
  let idx = 0;
  for( let i = 0; i < s.length; i++ ) {
      if( s[i] === " " ) {
          // 공백일 경우
          // 인덱스 값을 초기화
          // 공백을 그냥 넣어준다. (예외처리)
          answer += " ";
          idx = 0;
          
      } else {
          answer += idx % 2 === 0
              // 짝수 인덱스라면 대문자로 추가
              ? s[i].toUpperCase()
              // 홀수 인덱스라면 소문자로 추가
              : s[i].toLowerCase()
          idx++;
      }
  }
  return answer;
}
function solution(s) {
  const answer = s.split(" ")
                  .map( word => {
                      return word.split("")
                                 .map( (letter, i) => {
                          return i % 2 === 0
                              ? letter.toUpperCase()
                              : letter.toLowerCase()
                      }).join("")
                  }).join(" ")
  return answer;
}