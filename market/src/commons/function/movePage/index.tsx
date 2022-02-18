import { useRouter } from "next/router";

export function useMovePage() {
  const router = useRouter();
  const movePage = (url) => () => {
    router.push(`/${url}`);
  };
  return movePage;
}
