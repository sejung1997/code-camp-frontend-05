import styled from "@emotion/styled";

export default function headerPage() {
  const Title = styled.div`
    font-size: 50px;
    width: 1600px;
    text-align: center;
    padding: 50px 0;
    border-bottom: 3px solid purple;
  `;
  return <Title>Tallker</Title>;
}
