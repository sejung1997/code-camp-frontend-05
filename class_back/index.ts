import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Board } from "./Board.postgres";

const typeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }
  type Query {
    fetchBoards: [Board]
  }
  input type CreateBoardInput {
    writer: String!
    title: String!
    age: Int!
  }
  type Mutation {
    createBoard(createBoardInput: CreateBoardInput): String
    deleteBoard(number: Int!): String
  }
`;
const resolvers = {
  Query: {
    fetchBoards: async () => {
      //DB에서 찾아옴
      const result = await Board.find({
        where: { writer: "철수", deletedAt: null },
      });
      console.log(result);
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // DB에다가 저장시킴
      await Board.insert({
        ...args.createBoardInput,
      });
      return "createBoard를 요청하셨습니다!!";
    },
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() }); //{조건},{바꿀내용}
      // Board.delete({ writer: "철수" });
      return "삭제가 완료되었습니다!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // cors: {
  //  true 이면 요청지(origin) 달라도 데이터 받을 수 있음
  //   origin: 'https://mysite.com'
  // }
});

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
    server.listen({ port: 4000 }); // 24 시간 켜놓는 서버

    //연결 성공
  })
  .catch((error) => {
    //연결 실패
    console.log(error);
  });
