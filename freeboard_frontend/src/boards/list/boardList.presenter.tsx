import * as B from "./boardList.styles";
import { IBoardListIProps } from "./boardList.types";
import Pagination01 from "../../commons/pagination/pagination01.container";

export default function boardListPageUI(props: IBoardListIProps) {
  return (
    <>
      <B.Search>
        <B.SearchTitle
          type="text"
          placeholder="제목을 검색해주세요"
          onClick={props.dataSearch}
        ></B.SearchTitle>
        <B.SearchYear placeholder="YYYY.MM.DD  YYYY.MM.DD"></B.SearchYear>
        <B.SearchBtn onClick={props.onClickSearch}>검색하기</B.SearchBtn>
      </B.Search>
      <B.List>
        <B.TopRow>
          <B.Column>번호</B.Column>
          <B.Column>제목</B.Column>
          <B.Column>작성자</B.Column>
          <B.Column>날짜</B.Column>
        </B.TopRow>

        {props.s?.fetchBoards
          ? props.s?.fetchBoards?.map((el: any, index: number) => (
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
            ))
          : props.a?.fetchBoards?.map((el: any, index: number) => (
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
        <Pagination01
          refetch={props.refetch}
          count={props.count}
          keyword={props.keyword}
        />
        <B.Button onClick={props.register}>게시물 등록하기</B.Button>
      </B.List>
    </>
  );
}
