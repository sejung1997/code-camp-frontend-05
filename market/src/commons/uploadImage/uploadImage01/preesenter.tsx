import * as A from "./styles";
export default function UploadImagePageUI(props) {
  return (
    <>
      <A.Box1 onClick={props.onClickImgBox}>
        <A.img
          imgUrl={
            props.defaultData?.fetchUseditem?.images[props.index] ||
            props.fileReaderUrl
          }
          src={
            props.defaultData?.fetchUseditem?.images[props.index]
              ? `https://storage.googleapis.com/${
                  props.defaultData?.fetchUseditem?.images[props.index]
                }`
              : props.fileReaderUrl
          }
        />

        {props.defaultData?.fetchUseditem?.images[props.index] ||
        props.fileReaderUrl
          ? ""
          : "+"}
        <br></br>
        {props.defaultData?.fetchUseditem?.images[props.index] ||
        props.fileReaderUrl
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
