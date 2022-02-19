import * as A from "./styles";
export default function UploadImagePageUI(props) {
  console.log(props.imgUrl);
  return (
    <>
      <A.Box1 onClick={props.onClickImgBox}>
        <A.img
          imgUrl={props.imgUrl?.[props.index]}
          src={`https://storage.googleapis.com/${props.imgUrl?.[props.index]}`}
        />

        {props.imgUrl?.[props.index] ? "" : "+"}
        <br></br>
        {props.imgUrl?.[props.index] ? "" : "Upload"}
      </A.Box1>
      <input
        style={{ display: "none" }}
        onChange={props.onChangeFile}
        type="file"
        ref={props.fileRef}
        multiple
      />
    </>
  );
}
