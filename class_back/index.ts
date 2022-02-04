import { createConnection } from "typeorm";
console.log("d");

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  port: 5009,
  host: "34.64.187.209",
  entities: ["./*.postgres.ts"], // 현위치에서 postgress.ts로 끝나는 모든파일
  logging: true,
  synchronize: true,
})
  .then(() => {
    console.log("접속완료");
    //연결 성공
  })
  .catch((error) => {
    //연결 실패
    console.log(error);
  });
