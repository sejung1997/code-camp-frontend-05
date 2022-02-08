import { v4 as uuidv4 } from "uuid";
import * as list from "./firebaseList.styles";
export default function FirebaseListPageUI(props) {
  console.log(props.boardData);
  return (
    <list.Main>
      <list.ColumnWrapper>
        <list.Column>번호</list.Column>
        <list.Column>제목</list.Column>
        <list.Column>내용</list.Column>
        <list.Column>작성자</list.Column>
      </list.ColumnWrapper>

      {props.boardData?.map((x) => (
        <list.wrapper key={uuidv4()}>
          <div>{x.writer}</div>
          <div>{x.title}</div>
          <div>{x.content}</div>
          <div>{x.utube}</div>
          <div>{x.Zonecode}</div>
          <div>{x.address}</div>
          <div>{x.addressDetai}</div>
        </list.wrapper>
      ))}
    </list.Main>
  );
}
