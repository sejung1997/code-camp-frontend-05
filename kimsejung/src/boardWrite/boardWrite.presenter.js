import * as wr from "./boardWrite.styles";
import UploadPage from "../Upload/upload.container";
export default function boardwritePageUI(props) {
  return (
    <wr.Main isEdit={props.data}>
      <wr.label>작성자</wr.label>
      <wr.inputTitle
        id="writer"
        readOnly={props.data}
        defaultValue={props.data ? props.data.writer : ""}
        onChange={props.changeInput}
        placeholder="작성자를 입력하세요"
      />
      <wr.label>비밀번호</wr.label>
      <wr.inputTitle
        id="password"
        type="password"
        onChange={props.changeInput}
        placeholder="비밀번호를 입력하세요"
      />
      <wr.label>제목</wr.label>
      <wr.inputTitle
        id="title"
        defaultValue={props.data ? props.data.title : ""}
        onChange={props.changeInput}
        placeholder="제목을 입력하세요"
      />
      <wr.label>내용</wr.label>
      <wr.inputContents
        id="contents"
        defaultValue={props.data ? props.data.contents : ""}
        onChange={props.changeInput}
        placeholder="내용을 입력하세요"
      />

      <wr.label>이미지</wr.label>
      {[1, 1, 1].map((_, index) => (
        <UploadPage
          key={index}
          index={index}
          data={props.data}
          // changeInput={props.changeInput}
          inputs={props.inputs}
          imgUrl={props.imgUrl}
          setImgUrl={props.setImgUrl}
          // imgUrl={props.imgUrl}
          // defaultUrl={props.defaultUrl}
          // isEdit={props.isEdit}
        />
      ))}
      <wr.submit onClick={props.data ? props.update : props.submit}>
        {props.data ? "수정하기" : "작성하기"}
      </wr.submit>
    </wr.Main>
  );
}
