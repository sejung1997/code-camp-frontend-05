import styled from "@emotion/styled";
export default function LayoutHeader() {
  const Wrapper = styled.div`
    height: 530px;
    width: 100%;
    background-size: cover;
    background-image: url("/images/fgh.jfif");
    background-repeat: repeat;
    background-attachment: fixed;
  `;
  return <Wrapper></Wrapper>;
}
