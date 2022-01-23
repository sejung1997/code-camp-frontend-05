import { ChangeEvent} from "react"

export interface IBoardUIIProps {
  changeWriter: (event:ChangeEvent<HTMLInputElement>) => void
  changePassword: (event:ChangeEvent<HTMLInputElement>) => void
  changeTitle: (event:ChangeEvent<HTMLInputElement>) => void
  changeContent: (event:ChangeEvent<HTMLTextAreaElement>) => void
  submit: () => void
  erroWriter: String
  erroPassword: String
  erroTitle: String
  erroContent: String
  isEdit: boolean
  update: () => void
  data: any
  cancel: () => void

}

export interface IBoardListIProps {
  a?:any
  register?: () => void
  isEdit?: boolean
  data?: any
  detailPage: (arg0: any) => void
}
export interface IstlesIprops {
  ggg: boolean
}