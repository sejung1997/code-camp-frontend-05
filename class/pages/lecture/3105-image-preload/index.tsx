import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const divRef = useRef<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();

  useEffect(() => {
    const img = new Image(); // img 태그 만들기
    img.src =
      "https://codebootcamp.co.kr/images/projects/contents/project_3-2_contents_gif.webp";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);
  const onClickImagePreLoad = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };
  const onClickImageLoad = () => {
    setLoaded(true);
  };
  return (
    <>
      ============= 이미지 프리로드 ===========
      <div ref={divRef}></div>
      <button onClick={onClickImagePreLoad}>이미지 프리로드</button>
      ============= 이미지 일반로드 ===========
      {loaded && (
        <img src="https://codebootcamp.co.kr/images/projects/contents/project_3-2_contents_gif.webp" />
      )}
      <button onClick={onClickImageLoad}>이미지 일반로드</button>
    </>
  );
}
