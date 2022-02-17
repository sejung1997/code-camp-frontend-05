import { useAuth } from "../../../scr/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  const { isLoding } = useAuth();

  if (isLoding) return <></>;
  return (
    <div>
      <div>커스텀 훅 연습 페이지 - 권한 분기</div>
      <div>로그인 체크 완료</div>
    </div>
  );
}
