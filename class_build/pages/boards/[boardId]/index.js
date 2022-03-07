import { useRouter } from "next/router";

export default function BoardDetailPage() {


  const router= useRouter()

  return <div>안녕하세요 상세페이지입니다,게시글아이디는{ router.query.boardId} 입니다</div>;
}
