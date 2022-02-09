import * as L from "./boardDetail.styles";
import ReactPlayer from "react-player";
import WriteCommentPage from "../comment/writeComment.container";
import ListCommentPage from "../comment/listComment.container";

export default function BoardDetailPageUI(props) {
  console.log(props.data?.fetchBoard?.images);

  return (
    <L.div>
      <L.Main>
        <L.Baner>
          <L.Img src="/images/Vector.png"></L.Img>
          <L.pri>
            <L.Name> {props.data?.fetchBoard.writer} </L.Name>{" "}
            <L.Day>Date: {props.data?.fetchBoard.createdAt.slice(0, 10)}</L.Day>
          </L.pri>
          <L.Img src="/images/Vector (1).png"></L.Img>
          <L.Img src="/images/Vector (2).png"></L.Img>
          <L.AddressInfo>
            {props.data?.fetchBoard.boardAddress?.zipcode + " "}
            {props.data?.fetchBoard.boardAddress?.address}
            <br></br>
            {props.data?.fetchBoard.boardAddress?.addressDetail}
          </L.AddressInfo>
        </L.Baner>
        <L.Title> {props.data?.fetchBoard.title}</L.Title>
        {props.data?.fetchBoard.images
          .filter((x) => x)
          .map((x) => (
            <L.MainImg
              key={x}
              src={`https://storage.googleapis.com/${x}`}
            ></L.MainImg>
          ))}

        <L.Contents>내용: {props.data?.fetchBoard.contents}</L.Contents>
        <L.Video>
          <ReactPlayer
            url={props.data?.fetchBoard.youtubeUrl}
            muted={true}
            playing={true}
          />
        </L.Video>

        <L.Like>
          <L.LikeOut onClick={props.up} />

          <L.DislikeOut onClick={props.down} />
          <L.Up>{props.data?.fetchBoard.likeCount}</L.Up>
          <L.Down>{props.data?.fetchBoard.dislikeCount}</L.Down>
        </L.Like>
      </L.Main>
      <L.buttonGroup>
        <L.ButtonUpdate onClick={props.update}>수정하기</L.ButtonUpdate>
        <L.ButtonList onClick={props.list}>목록으로</L.ButtonList>
        <L.ButtonDelete onClick={props.deleteBtn}>삭제하기</L.ButtonDelete>
      </L.buttonGroup>
      <WriteCommentPage />
      <ListCommentPage />
    </L.div>
  );
}
