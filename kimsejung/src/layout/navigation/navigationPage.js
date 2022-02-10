import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function headerPage() {
  const router = useRouter();
  const Title = styled.div`
    font-size: 25px;
    padding: 10px 20px;
    background-color: purple;
    margin-bottom: 40px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  `;

  const Main = styled.div`
    width: 300px;
    padding: 50px 0 0 40px;
  `;
  const moveNew = () => {
    router.push("/NEW");
  };
  const moveList = () => {
    router.push("/boardList");
  };
  const moveSearch = () => {
    router.push("/boardSearch");
  };
  const moveApi = () => {
    router.push("/API");
  };
  return (
    <Main>
      <Title onClick={moveList}>전체 글 보기</Title>
      <Title onClick={moveNew}>새 글 작성</Title>
      <Title onClick={moveSearch}>글 검색</Title>
      <Title onClick={moveApi}>openApi</Title>
    </Main>
  );
}
