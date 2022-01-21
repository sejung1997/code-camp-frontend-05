
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




  
  

 
  
          //const getMyDate = (myDate) => {
          // const aaa = new Date(myDate)


         // const year = aaa.getFullYear()
        //  const month = aaa.getMonth() + 1
        // const date = aaa.getDate()
        // return `${year}-${month}-${date}`
        // aaa.getDay()

        //}
          
  
  




  return (
      <BoardListPageUI
        a={a}
        register={register}/>
  )
}