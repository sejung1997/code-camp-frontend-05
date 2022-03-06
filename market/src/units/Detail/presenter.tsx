import * as L from "./styles";
import FetchCommentList from "../comment/fetchCommentList";
import CreateCommentContainer from "../comment/createComment.container";
import Dompurify from "dompurify";
import { IFetchItemPresenter } from "./gql&types";

export default function fetchItemPresenter(props: IFetchItemPresenter) {
  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4e89be21e672c2ea6ecbba62c71fa54a"
        ></script>
      </Head> */}
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
            <L.HeartIcon onClick={props.UseditemPick} isPick={props.isPick} />
            <L.EditIcon
              style={{ fontSize: "40px" }}
              onClick={props.movePage(`${props.router.query.id}/edit`)}
            />
            <L.DeleteIcon
              style={{ fontSize: "40px" }}
              onClick={props.deleteBtn}
            />
            {/* <L.AddressInfo>
              {props.data?.fetchUseditem?.boardAddress?.zipcode + " "}
              {props.data?.fetchUseditem?.boardAddress?.address}
              <br></br>
              {props.data?.fetchUseditem?.boardAddress?.addressDetail}
            </L.AddressInfo> */}
          </L.Baner>
          <L.Name> 상품명: {props.data?.fetchUseditem?.name} </L.Name>

          <L.Name>한줄 요약: {props.data?.fetchUseditem?.remarks}</L.Name>
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

          <L.Contents>
            내용:
            {process.browser && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem?.contents)
                  ),
                }}
              />
            )}
          </L.Contents>
          <div id="map" style={{ width: 500, height: 400 }}></div>

          <L.Like>
            <L.HeartIcons />

            <L.Up>
              {props.isPickCount
                ? props.isPickCount
                : props.data?.fetchUseditem?.pickedCount}
            </L.Up>
          </L.Like>
        </L.Main>
        <L.buttonGroup>
          <L.ButtonList onClick={props.movePage("list")}>목록으로</L.ButtonList>
          <L.ButtonList onClick={props.pickUp}>장바구니에 담기</L.ButtonList>
          <L.ButtonList onClick={props.purchase}>구매하기</L.ButtonList>

          {/* <PurchaseItem data={props.data?.fetchUseditem} /> */}
        </L.buttonGroup>
        <CreateCommentContainer />
        <FetchCommentList />
      </L.div>
    </>
  );
}
