import * as A from "./styles";
export default function UploadImagePageUI(props) {
  console.log(props.defaultData?.fetchUseditem?.images[props.index]);
  return (
    <>
      <A.Box1 onClick={props.onClickImgBox}>
        <A.img
          imgUrl={
            props.defaultData?.fetchUseditem?.images[props.index] ||
            props.fileReaderUrl
          }
          src={
            props.fileReaderUrl
              ? props.fileReaderUrl
              : `https://storage.googleapis.com/${
                  props.defaultData?.fetchUseditem?.images[props.index]
                }`
            //  props.imgUrl?.[props.index].includes("codecamp-file-storage")
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
