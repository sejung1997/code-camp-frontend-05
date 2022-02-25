import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // files가 있다면?
    console.log(file);
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    // 받은 데이터
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      if (typeof data.target?.result === "string")
        setImageUrl(data.target?.result || "");
    };
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </div>
  );
}
