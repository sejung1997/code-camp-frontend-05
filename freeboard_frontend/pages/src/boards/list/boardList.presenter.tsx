import * as B from "./boardList.styles";
import { IBoardListIProps } from "./boardList.types";

export default function boardListPageUI(props: IBoardListIProps) {
  return (
    <>
      <B.Search>
        <B.SearchTitle placeholder="제목을 검색해주세요"></B.SearchTitle>
        <B.SearchYear placeholder="YYYY.MM.DD  YYYY.MM.DD"></B.SearchYear>
        <B.SearchBtn onClick={props.searchClick}>검색하기</B.SearchBtn>
      </B.Search>
      <B.List>
        <B.TopRow>
          <B.Column>번호</B.Column>
          <B.Column>제목</B.Column>
          <B.Column>작성자</B.Column>
          <B.Column>날짜</B.Column>
        </B.TopRow>

        {props.a?.fetchBoards?.map((el: any, index: number) => (
          <B.Row key={el._id}>
            <B.Column>{index + 1}</B.Column>
            <B.Column>
              <B.Title onClick={() => props.detailPage(el._id)}>
                {el.title}
              </B.Title>
            </B.Column>
            <B.Column>{el.writer}</B.Column>
            <B.Column>{el.createdAt.slice(0, 10)}</B.Column>
            {/* <Column>{el.contents}</Column> */}
          </B.Row>
        ))}
        <B.Button onClick={props.register}>게시물 등록하기</B.Button>
      </B.List>
    </>
  );
}
