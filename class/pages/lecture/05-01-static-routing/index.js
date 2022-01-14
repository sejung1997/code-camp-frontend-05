import {useRouter} from 'next/router'


export default function StaticRoutingPage() {

  const router = useRouter()

  const move = () => {

    router.push("/lecture/05-02-static-routed")
  }

  return (

      <button onClick={move}>페이지 이동하기</button>

  )
}