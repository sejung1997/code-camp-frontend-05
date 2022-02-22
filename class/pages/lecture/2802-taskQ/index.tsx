export default function TaskQuePage() {
  const onClickTimer = () => {
    console.log("=========시작======================");
    setTimeout(() => {
      console.log("1초뒤 실행");
    }, 1000);
    let sum = 0;
    for (let i = 0; i < 9999999999; i++) {
      sum += 1;
    }

    console.log("===============끝==========");
  };
  return (
    <div>
      <button onClick={onClickTimer}>시작</button>
    </div>
  );
}
