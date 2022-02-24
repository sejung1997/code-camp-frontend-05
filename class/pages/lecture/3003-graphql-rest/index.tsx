import axios from "axios";

const GraphqlRestPage = () => {
  const onclickGraphql = () => {
    axios.post("http://backend05.codebootcamp.co.kr/graphql", {
      query: `
        mutation createBoard {
           createBoard(
             createBoardInput: {
                writer: "철 수",
                password: "123",
                title: "제목",
                contents: "내용"
              }
            )
            {_id,writer}
        },

        `,
    });
  };

  return (
    <>
      <button onClick={onclickGraphql}>그래프큐엘 Axios 테스트</button>;
    </>
  );
};
export default GraphqlRestPage;
