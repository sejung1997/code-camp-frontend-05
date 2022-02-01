import * as he from "./header.styles";
import { IHeaerPageUIProps } from "./header.types";

export default function HeaderPageUI(props: IHeaerPageUIProps) {
  return (
    <div>
      <he.H2> 자유 게시판</he.H2>
      <he.Menu>
        <he.H3L address={props.address} onClick={props.l}>
          게시판 목록
        </he.H3L>

        <he.H3 address={props.address}>게시글 보기</he.H3>

        <he.H3N address={props.address} onClick={props.n}>
          게시판 등록
        </he.H3N>

        <he.H3E address={props.address}>게시판 수정</he.H3E>

        <he.H3M onClick={{props.r}}>회원가입</he.H3M>
      </he.Menu>
    </div>
  );
}
