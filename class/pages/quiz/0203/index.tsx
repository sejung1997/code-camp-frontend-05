import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function quiz() {
  const [ischange, setIschange] = useState(false);
  const router = useRouter();

  const change = () => {
    setIschange(true);
  };
  const move = () => {
    router.push("/");
  };
  useEffect(() => {
    console.log("Rendered");

    // componentWillUnmoun와 동일
    return () => {
      console.log("Changeed");
    };
  });
  return (
    <div>
      <button onClick={change}>변경</button>
      <button onClick={move}>이동</button>
    </div>
  );
}
