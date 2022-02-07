// 데코레이터 예제

function qqq(aaa: any) {
  console.log("============");
  console.log(aaa);
  console.log("============");
}

@qqq
class MyBoard {}
