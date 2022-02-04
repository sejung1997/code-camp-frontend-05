import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function quiz() {
  const [ischange, setIschange] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const change = () => {
    setIschange((prev) => prev + 1);
  };
  const move = () => {
    router.push("/");
  };
  useEffect(() => {
    console.log("Rendered");
    inputRef.current?.focus();

    return () => {
      // console.log("bye");
    };
  }, [move]);
  useEffect(() => {
    console.log("changed");
  });
  return (
    <div>
      <button onClick={change}>변경</button>
      <button onClick={move}>이동</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}
