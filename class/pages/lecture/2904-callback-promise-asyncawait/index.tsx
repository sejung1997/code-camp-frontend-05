import { async } from "@firebase/util";
import axios from "axios";
import { reject } from "lodash";

export default function CallbackPromiseAsyncawaitPage() {
  const onClickCallback = () => {
    // function qqq() {}
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const UserId = JSON.parse(res.target.response).UserId;
        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${UserId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          console.log(JSON.parse(res.target.response));
        });
      });
    });
  };
  // const result =  new Promise((resolve, reject) => {
  //   const aaa = new XMLHttpRequest();
  //   aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
  //   aaa.send();
  //   aaa.addEventListener("load", (res: any) => {
  //     resolve(res.target.response.split(" ")[0]); // result에 담김
  //      // reject() 에러났을때
  // }).then((res) => {})

  // prettier-ignore
  const onClickPromise = () => {
    axios.get("http://numbersapi.com/random?min=1&max=200").then((res) => {
      const num =  res.data.split(" ")[0]
      return axios.get(`http://koreanjson.com/posts/${num}`)
    })
    .then((res) =>{
      const UserId = res.data.UserId
      return axios.get( `http://koreanjson.com/posts?userId=${UserId}`)
    })
    .then((res) => {
      console.log(res)
    })

  };
  // prettier-ignore

  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200")
    const num =  res1.data.split(" ")[0]

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`)
    const UserId = res2.data.UserId
    const res3 = await axios.get( `http://koreanjson.com/posts?userId=${UserId}`)
    console.log(res3)

     // await fetch() : promise return 하는 라이브러리
  };
  return (
    <>
      <button onClick={onClickCallback}>callback 요청</button>
      <button onClick={onClickPromise}>promise 요청</button>
      <button onClick={onClickAsyncAwait}>async await 요청</button>
    </>
  );
}
