
import { useQuery } from "@apollo/client"
import { FETCH_BOARDS} from "../list/boardList.queries"
import BoardListPageUI from "../list/boardList.presenter"
import { useRouter } from "next/router"

export default function boardListPage() {
  const { data: a } = useQuery(FETCH_BOARDS)

  const router = useRouter()
  const register = () => {
    router.push('/NEW')
  }

  const detailPage = (id:any) => {
    router.push(`/${id}`)
  }


  
  

 
  
        
          
  
  




  return (
      <BoardListPageUI
        a={a}
        register={register}
        detailPage={detailPage}/>
  )
}