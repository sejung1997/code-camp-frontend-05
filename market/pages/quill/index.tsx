import Quill from "quill";
import dynamic from "next/dynamic";

const Quill = dynamic(() => import("Quill"), { ssr: false });

export default function QuillText() {
  // if (process.browser) {
  //   const quill = new Quill("#editor", {
  //     modules: {
  //       toolbar: false, // Snow includes toolbar by default
  //     },
  //     theme: "snow",
  //   });
  // }

  return (
    <div id="editor" style={{ marginTop: "500px" }}>
      <p>Hello World!</p>
      <p>
        Some initial <strong>bold</strong> text
      </p>
      <p>
        <br />
      </p>
    </div>
  );
}
