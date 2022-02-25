export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("promise 시작");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
      }, 5000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("영희");
      }, 2000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 8000);
    });
    console.log(result3);
    console.timeEnd("promise 시작"); // 똑같은 이름이면 시간 알려줌
  };
  const onClickPromiseAll = async () => {
    // 1. 하나하나 각각 입력하는 방법
    // console.time("promiseAll 시작");
    // const results = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 5000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("영희");
    //     }, 2000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("훈이");
    //     }, 8000);
    //   }),
    // ]);  // 동시에 보내고 같이 기다림
    // console.log(results);
    // console.timeEnd("promiseAll 시작");

    // 2. map을 사용해서 간소화
    console.time("promiseAll 시작");
    const results = await Promise.all(
      ["철수", "영희", "훈이"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 5000);
          })
      )
    );
    // Promise.race : 먼저 끝나는 거 받아오기
    console.log(results);
    console.timeEnd("promiseAll 시작");
  };
  return (
    <div>
      <button onClick={onClickPromise}>시작하기</button>
      <button onClick={onClickPromiseAll}>시작하기(All)</button>
    </div>
  );
}
