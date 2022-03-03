import { useRouter } from "next/router";

export default function CypressIntegrationTest1() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/lecture/3304-cypress-integration-test2")}
      >
        철수랑 놀러가기{" "}
      </button>
    </div>
  );
}
