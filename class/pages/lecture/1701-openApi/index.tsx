import { useEffect, useState } from "react";
import axios from "axios";

export default function OpenApiPage() {
  const [dogUrl, setDogUrl] = useState("");
  useEffect(() => {
    // await 붙이기위해 함수 하나 만듬
    async function fetchDog() {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    }
    fetchDog();
  }, []);
  return (
    <div>
      <div>오픈 API 연습</div>
      <img src={dogUrl} />
    </div>
  );
}
