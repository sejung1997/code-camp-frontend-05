import {useRouter} from 'next/router'


export default function DynamicRoutingPage() {

  const router = useRouter()

  



  const move1 = () => {
    router.push("/lecture/05-06-dynamic-routed-board/1")
  }
  const move2 = () => {
    router.push("/lecture/05-06-dynamic-routed-board/2")
  }
  const move3 = () => {
    router.push("/lecture/05-06-dynamic-routed-board/3")
  }
  const move4 = () => {
    router.push("/lecture/05-06-dynamic-routed-board/4")
  }
  const move100 = () => {
    router.push("/lecture/05-06-dynamic-routed-board/100")
  }


  return (
    <div>

      {/* // <button onClick={move}>페이지 이동하기</button> */}
      <button onClick={move1}>1번 게시글로 이동하기</button>
      <button onClick={move2}>2번 게시글로 이동하기</button>
      <button onClick={move3}>3번 게시글로 이동하기</button>
      <button onClick={move4}>4번 게시글로 이동하기</button>
      <button onClick={move100}>100번 게시글로 이동하기</button>

    </div>
      
  )
}
