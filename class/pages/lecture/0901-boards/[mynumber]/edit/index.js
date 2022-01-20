

import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWrite from '../../../../../scr/commons/09-example/Example.container'

const FETCH_BOARD = gql `

  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`

export default function BoardsEditlPage() {
  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD, {
    variables: {number: Number(router.query.mynumber)}
  })


  return (
    <BoardWrite  
        isEdit={true}
        data={data}
    />
  )
} 