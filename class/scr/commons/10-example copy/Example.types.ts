import { ChangeEvent} from "react"

export interface IBoardUIIProps {
  aaa: boolean
  xxx: () => void

  ccc: () => void
  ddd: (event:ChangeEvent<HTMLInputElement>) => void
  eee: (event:ChangeEvent<HTMLInputElement>) => void
  fff: (event:ChangeEvent<HTMLInputElement>) => void
  isActive: boolean
  data: any

}

export interface IBoardIProps {
  isEdit: boolean
  data?: any
}
export interface IstlesIprops {
  ggg: boolean
}