export default function browserStoragePage() {
  const onclickSaveCookie = () => {
    document.cookie = "aaa = 철 수 bbb= 맹 구";
    document.cookie = "eee =  수 zzz=  구";
  };
  const onclickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onclickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };
  const onclickGetCookie = () => {
    // const aaa = document.cookie;
    // console.log(aaa);
    // aaa=철수 bbb=맹구; eee= 수 zzz= 구
    const aaa = document.cookie
      .split("; ") // ["aaa=철수", "eee= 수"]
      .filter((el) => el.startsWith("aaa"))[0];
    console.log(aaa.replace("aaa=", ""));
  };

  const onclickGetLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onclickGetSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };
  return (
    <div>
      <button onClick={onclickSaveCookie}>쿠키저장</button>
      <button onClick={onclickSaveLocal}>로컬저장</button>
      <button onClick={onclickSaveSession}>세션저장</button>
      =================================================
      <button onClick={onclickGetCookie}>쿠키조회</button>
      <button onClick={onclickGetLocal}>로컬조회</button>
      <button onClick={onclickGetSession}>세션조회</button>
    </div>
  );
}
