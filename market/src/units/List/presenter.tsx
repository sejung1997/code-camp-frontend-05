import * as List from "./styles";
import { v4 as uuidv4 } from "uuid";

export default function fetchUseditemsPresenter(props) {
  return (
    <>
      <List.Search>
        <List.SearchTitle
          type="text"
          placeholder="제목을 검색해주세요"
          onChange={props.changeKeyword}
        ></List.SearchTitle>
        <List.SearchYear placeholder="YYYY.MM.DD  YYYY.MM.DD"></List.SearchYear>
        <List.SearchBtn onClick={props.onClickSearch}>검색하기</List.SearchBtn>
      </List.Search>
      <List.List>
        <List.TopRow>
          <List.Column>번호</List.Column>
          <List.Column>제목</List.Column>
          <List.Column>작성자</List.Column>
          <List.Column>날짜</List.Column>
        </List.TopRow>

        {props.data?.fetchUseditems?.map((el: any, index: number) => (
          <List.Row key={el._id}>
            <List.Column>{index + 1}</List.Column>
            <List.Column>
              <List.Title onClick={props.movePage(el._id)}>
                {el.name
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((el) => (
                    <List.word key={uuidv4()} isMatched={el === props.keyword}>
                      {el}
                    </List.word>
                  ))}
              </List.Title>
            </List.Column>
            <List.Column>{el.seller.name}</List.Column>
            <List.Column>{el.createdAt.slice(0, 10)}</List.Column>
            {/* <Column>{el.contents}</Column> */}
          </List.Row>
        ))}
        {/* <Pagination01
          refetch={props.refetch}
          count={props.count}
          keyword={props.keyword}
        /> */}
        <List.Button onClick={props.register}>게시물 등록하기</List.Button>
      </List.List>
    </>
  );
}
