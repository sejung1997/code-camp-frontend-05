import * as A from "./uploadImage01.styles";
export default function UploadImagePageUI(props) {
  console.log(props.isChange);
  return (
    <>
      <A.Box1 onClick={props.onClickImgBox}>
        <A.img
          imgUrl={props.imgUrl[props.index] || props.defaultUrl?.[props.index]}
          src={
            props.defaultUrl?.[props.index] && !props.isEdit
              ? `https://storage.googleapis.com/${
                  props.defaultUrl?.[props.index]
                }`
              : `https://storage.googleapis.com/${props.imgUrl[props.index]}`
          }
        />

        {props.imgUrl[props.index] || props.defaultUrl?.[props.index]
          ? ""
          : "+"}
        <br></br>
        {props.imgUrl[props.index] || props.defaultUrl?.[props.index]
          ? ""
          : "Upload"}
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
