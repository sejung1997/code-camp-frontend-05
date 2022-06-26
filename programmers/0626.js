function solution(numbers, target) {
  let answer = 0;

  const search = (i, plus, s) => {
    let sum = plus ? s + numbers[i] : s - numbers[i];
    if (i === numbers.length - 1) {
      sum === target ? answer++ : "";
    } else {
      search(i + 1, true, sum);
      search(i + 1, false, sum);
    }
  };
  search(0, true, 0);
  search(0, false, 0);

  return answer;
}

function solution(progresses, speeds) {
  var answer = {};
  const leftDay = progresses.map((el, index) => {
    return Math.ceil((100 - el) / speeds[index]);
  });
  console.log(leftDay);
  for (let i = 0; i < leftDay.length; i++) {
    let number = 1;
    for (let j = i + 1; j < leftDay.length; ) {
      if (leftDay[i] < leftDay[j]) break;
      else {
        number++;
        leftDay.splice(j, 1);
      }
    }
    leftDay[i] = number;
  }

  return leftDay;
}
