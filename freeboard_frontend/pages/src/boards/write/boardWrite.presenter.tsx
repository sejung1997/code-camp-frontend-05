

import {IBoardUIIProps} from "../list/boardList.types"
import * as A from "./boardWrite.styles";

export default function BoardWriteUI (props:IBoardUIIProps) {


  return (
    <>
      <A.Main>
        <A.TopTitle>게시물 {props.isEdit? '수정' : '등록'}</A.TopTitle>
        <A.WritterWrapper>

          <A.OptionWrapper>
            <A.Title>작성자</A.Title>
            <A.InputName placeholder="이름을 적어주세요." onChange={props.changeWriter} 
                         defaultValue={props.isEdit? props.data?.fetchBoard.writer : ''} 
                         disabled ={props.isEdit}>
                          {/* readOnly={props.data?.fetchBoard.writer} */}

            </A.InputName>
            <A.Erro>{props.erroWriter}</A.Erro>

          </A.OptionWrapper>


          <A.OptionWrapper>
            <A.Title>비밀번호</A.Title>
            <A.InputName placeholder="비밀번호를 입력해주세요" onChange={props.changePassword} 
                        defaultValue={props.isEdit? props.data?.fetchBoard.password : ''}>

            </A.InputName>
            <A.Erro>{props.erroPassword}</A.Erro>


          </A.OptionWrapper>


        </A.WritterWrapper>

        <A.OptionWrapper>
          <A.Title>제목</A.Title>
          <A.InputTitle placeholder="제목을 작성해주세요" onChange={props.changeTitle} 
                        defaultValue={props.isEdit? props.data?.fetchBoard.title : ''}>

          </A.InputTitle>
          <A.Erro>{props.erroTitle}</A.Erro>

        </A.OptionWrapper>

        <A.OptionWrapper>
          <A.Title>내용</A.Title>
          <A.InputContent placeholder="내용을 작성해주세요" onChange={props.changeContent}  
                          defaultValue={props.isEdit? props.data?.fetchBoard.contents : ''}>

          </A.InputContent>
          <A.Erro>{props.erroContent}</A.Erro>

        </A.OptionWrapper>

        <A.OptionWrapper>
          <A.Title>주소</A.Title>
          <A.InputNum placeholder="07250"></A.InputNum> 
          <A.SearchBtn >우편번호 검색</A.SearchBtn>
          <A.Input disabled />
          <A.Input disabled/>

        </A.OptionWrapper>

        <A.YoutubeWrapper>
          <A.Title>유트브</A.Title>
          <A.InputYoutube placeholder="링크를 복사해주세요."></A.InputYoutube>
        </A.YoutubeWrapper>

        <A.OptionWrapper>
          <A.Title>사진 첨부</A.Title>
          <A.BoxGroup>
            <A.Box>+<br></br>Upload</A.Box>
            <A.Box>+<br></br>Upload</A.Box>
            <A.Box>+<br></br>Upload</A.Box>
          </A.BoxGroup>
          
        </A.OptionWrapper>
        <A.OptionWrapper>
            <A.Title>메인 설정</A.Title>
            <A.InputMain type='radio' name="main"/><A.Youtube>유트브</A.Youtube>  
            <A.InputMain type='radio' name="main"/><A.Youtube>사진</A.Youtube>
        </A.OptionWrapper>

        <A.BottomButton>

          <A.BottomSubmit onClick={props.isEdit? props.update : props.submit}>
            {props.isEdit? '수정하기' :'등록하기'}
          </A.BottomSubmit>
          <A.BottomCancel onClick={props.cancel}  hidden = {props.isEdit}>
          취소하기
          </A.BottomCancel>


        </A.BottomButton>

        

      </A.Main>
    </>
    

  )
}




