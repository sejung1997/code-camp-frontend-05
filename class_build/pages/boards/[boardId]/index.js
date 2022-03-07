import { useRouter } from "next/router";
import  Head  from "next/head";
import {gql,request} from "graphql-request"

// 두 번 째 실행(props 받아옴)
export default function BoardDetailPage(props) {


  const router= useRouter()

  return (
    <div>
    <div>
      <Head>
        <meta property="og:title" content={props.myBoardData?.fetchBoard.title}/>
        <meta property="og:description" content={props.myBoardData?.fetchBoard.contents}/>
        <meta property="og:image" content={props.myBoardData?.fetchBoard.images[0]}/>

      </Head>
    </div>
    <div>
       안녕하세요 상세페이지입니다,게시글아이디는{ router.query.boardId} 입니다
    </div>
  </div>
  )
 
}
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
      images
    }
  }
`
// 이 페이지는 서버 사이드 렌더링
export const getServerSideProps = async (context) => {
  // 여기선 router/userouter 실행 안됨 , 대신 서버정보(context)
 // 데이터를 요청할 것//첫번째 실행 
  const result = await request(
    "http://backend05.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    {boardId: context.query.boardId}

  )
  return {
    props:{
      myBoardData: {
        title: result?.fetchBoard.title,
        contents: result?.fetchBoard.content,
        images: result?.fetchBoard.images
      }
    }
  }
}