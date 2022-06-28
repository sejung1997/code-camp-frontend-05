import * as Footer from "./footer.styles";
import { useMovePage } from "../../function/movePage";

export default function FooterPage(props) {
  const movePage = useMovePage();

  return (
    <Footer.Main>
      <Footer.Inner>
        <Footer.InfoWrapper>
          <Footer.logo>Green Market</Footer.logo>

          <Footer.MainMenu>
            <Footer.MenuLabel>믿을 수 있는 상품거래</Footer.MenuLabel>
            <Footer.MenuLabel>자주 묻는 질문</Footer.MenuLabel>
          </Footer.MainMenu>
          <Footer.MainMenu>
            <Footer.MenuLabel>회사 소개</Footer.MenuLabel>
            <Footer.MenuLabel>채용</Footer.MenuLabel>
          </Footer.MainMenu>

          <Footer.MainMenu>
            <Footer.MenuLabel>개인정보처리방침</Footer.MenuLabel>
            <Footer.MenuLabel>위치기반서비스 이용약관</Footer.MenuLabel>
            <Footer.MenuLabel>이용자보호 비전과 계획</Footer.MenuLabel>
          </Footer.MainMenu>
        </Footer.InfoWrapper>

        <Footer.InfoWrapper>
          <span>고객문의</span>
          <Footer.UserLabel> ksgve1997814@naver.com</Footer.UserLabel>
          <span>제휴문의</span>{" "}
          <Footer.UserLabel> ksgve1997814@naver.com</Footer.UserLabel>
          <span>광고</span>
          <Footer.UserLabel> sejung1997@gmail.com</Footer.UserLabel>
          <span>PR문의</span>
          <Footer.UserLabel> sejung1997@gmail.com</Footer.UserLabel>
          <Footer.UserLabel>
            서울특별시 마포구 토정로 31길 24, 301호 (그린서비스)
          </Footer.UserLabel>
          <Footer.UserLabel> 사업자 등록번호 : 375-17-00088</Footer.UserLabel>
          <Footer.UserLabel>
            직업정보제공사업 신고번호 : J120002020005
          </Footer.UserLabel>
        </Footer.InfoWrapper>
      </Footer.Inner>
    </Footer.Main>
  );
}
