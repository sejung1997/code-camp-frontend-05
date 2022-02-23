export default function TaskQuePage() {
  const onClickTimer = () => {
    console.log("=========시작======================");
    // 비동기 작업(메크로큐에 들어감)
    setTimeout(() => {
      console.log("setTimeout(mecro queue)0초 뒤 실행");
    }, 0);

    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) => console.log("저는 promise(micro queue)0초 뒤 실행 1"));

    setInterval(() => {
      console.log("setInterval(mecro queue)0초 마다 실행");
    }, 0);

    let sum = 0;
    for (let i = 0; i < 9999999999; i++) {
      sum += 1;
    }
    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) => console.log("저는 promise(micro queue)0초 뒤 실행 2"));

    console.log("===============끝==========");
  };
  return (
    <div>
      <button onClick={onClickTimer}>시작</button>
    </div>
  );
}
