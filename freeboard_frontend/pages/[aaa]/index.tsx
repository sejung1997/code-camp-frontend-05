import {useRouter} from 'next/router'
import { useQuery, gql,useMutation } from '@apollo/client'
import WriteCommentPage from '../src/boards/comment/writeComment.container'
import * as L from "../../styles/board"

import ReactPlayer from 'react-player'
import { tuple } from 'antd/lib/_util/type'


const FETCH_BOARD = gql `
  query fetctBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      _id
      youtubeUrl
    }
  }

`
const LIKE_COUNT = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId) 
  }
`
const DISLIKE_COUNT = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId) 
  }
`

export default function DynamicRoutedPage() {

const [dislikeBoard] = useMutation(DISLIKE_COUNT)
const [likeBoard] = useMutation(LIKE_COUNT)

const router = useRouter()
const {data} = useQuery(FETCH_BOARD, {
  variables: {boardId: router.query.aaa}
})
const id = data?.fetchBoard._id
// mutation은 대괄호,원하는 시점에 요청가능 query는 중괄호,페이지 실행될떄 자동으로

const update = () => {

  router.push(`/${id}/edit`)
}
const list = () => {
  router.push('./boardList')
}
const up = async () => {
  const result1 = await likeBoard({
    variables: {boardId: router.query.aaa},
    refetchQueries: [{ query: FETCH_BOARD, 
      variables: {boardId: router.query.aaa}
    }]
  })
}
const down = async () => {
  const result = await dislikeBoard({
    variables: {boardId: router.query.aaa},
    refetchQueries: [{ query: FETCH_BOARD, 
      variables: {boardId: router.query.aaa}
    }]
  })
}


  return (
    <>
      <L.Main>
        <L.Baner>
          <L.Img src="/images/Vector.png"></L.Img>
             <L.pri><L.Name> {data?.fetchBoard.writer} </L.Name>  <L.Day>Date: {data?.fetchBoard.createdAt.slice(0,10)}</L.Day></L.pri> 
          <L.Img src='/images/Vector (1).png'></L.Img>
          <L.Img src='/images/Vector (2).png'></L.Img>
        </L.Baner>
        <L.Title> {data?.fetchBoard.title}</L.Title>
        <L.MainImg>1</L.MainImg>
        <L.Contents>내용: {data?.fetchBoard.contents}</L.Contents>
        <L.Video><ReactPlayer url={data?.fetchBoard.youtubeUrl} muted={true} playing={true}/></L.Video>

      

        <L.Like>
         <div><L.LikeOut onClick={up}/><L.Up>{data?.fetchBoard.likeCount}</L.Up></div> 
         <div><L.DislikeOut onClick={down} /><L.Down>{data?.fetchBoard.dislikeCount}</L.Down></div>
        </L.Like>
        
        

      </L.Main>
      <L.buttonGroup>
        <L.ButtonUpdate onClick={update}>수정하기</L.ButtonUpdate>
        <L.ButtonList onClick={list}>목록으로</L.ButtonList>
      </L.buttonGroup>
      
      <WriteCommentPage/>
    </>
    

    
  
 )
}