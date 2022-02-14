import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../scr/commons/types/generated/type";
const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSucessPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
}
