import { useRouter } from "next/router";
import  Head  from "next/head";
export default function BoardDetailPage() {


  const router= useRouter()

  return (
    <div>
    <div>
      <Head>
        <meta property="og:title" content="나의 게시판"/>
        <meta property="og:description" content="나의 게시판에 오신것을 환영합니다"/>
        <meta property="og:image" content="https://dullyshin.github.io/2018/08/30/HTML-imgLink/#lg=1&slide=0"/>

      </Head>
    </div>
    <div>
       안녕하세요 상세페이지입니다,게시글아이디는{ router.query.boardId} 입니다
    </div>
  </div>
  )
 
}
