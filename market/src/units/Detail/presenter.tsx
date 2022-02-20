import * as L from "./styles";
import FetchCommentList from "../comment/fetchCommentList";
import CreateCommentContainer from "../comment/createComment.container";
export default function fetchItemPresenter(props) {
  return (
    <>
      <L.div>
        <L.Main>
          <L.Baner>
            <L.Img src="/images/Vector.png"></L.Img>
            <L.pri>
              <L.Name>: {props.data?.fetchUseditem?.seller.name}</L.Name>
              <L.Day>
                Date: {props.data?.fetchUseditem?.createdAt.slice(0, 10)}
              </L.Day>
            </L.pri>
            <L.Img src="/images/Vector (1).png"></L.Img>
            <L.Img src="/images/Vector (2).png"></L.Img>
            {/* <L.AddressInfo>
              {props.data?.fetchUseditem?.boardAddress?.zipcode + " "}
              {props.data?.fetchUseditem?.boardAddress?.address}
              <br></br>
              {props.data?.fetchUseditem?.boardAddress?.addressDetail}
            </L.AddressInfo> */}
          </L.Baner>
          <L.Name> 상품명{props.data?.fetchUseditem?.name} </L.Name>

          <L.Name>한줄 요약 {props.data?.fetchUseditem?.remarks}</L.Name>
          <L.Name>가격: {props.data?.fetchUseditem?.price}원</L.Name>
          <L.Name>
            태그 {props.data?.fetchUseditem?.tags.map((x) => `${x} `)}{" "}
          </L.Name>
          {props.data?.fetchUseditem?.images
            .filter((x) => x)
            .map((x) => (
              <L.MainImg
                key={x}
                src={`https://storage.googleapis.com/${x}`}
              ></L.MainImg>
            ))}

          <L.Contents>내용: {props.data?.fetchUseditem?.contents}</L.Contents>

          {/* <L.Like>
            <L.LikeOut onClick={props.up} />

            <L.DislikeOut onClick={props.down} />
            <L.Up>{props.data?.fetchUseditem?.likeCount}</L.Up>
            <L.Down>{props.data?.fetchUseditem?.dislikeCount}</L.Down>
          </L.Like> */}
        </L.Main>
        <L.buttonGroup>
          <L.ButtonUpdate
            onClick={props.movePage(`${props.router.query.id}/edit`)}
          >
            수정하기
          </L.ButtonUpdate>
          <L.ButtonList onClick={props.movePage("list")}>목록으로</L.ButtonList>
          <L.ButtonDelete onClick={props.deleteBtn}>삭제하기</L.ButtonDelete>
        </L.buttonGroup>
        <CreateCommentContainer />
        <FetchCommentList />
      </L.div>
    </>
  );
}
