import { FETCH_USED_ITEM_QUESTIONS } from "./Comment.gql&types";
import { useQuery } from "@apollo/client";
import CommentEdit from "./CommentEdit/CommentEdit.container";
import { useRouter } from "next/router";

export default function FetchCommentContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.id, page: 1 },
  });

  if (!data) return <div />;

  console.log(data);
  return (
    <div>
      {data?.fetchUseditemQuestions?.map((el, index) => (
        <CommentEdit key={el._id} el={el} index={index} />
      ))}
    </div>
  );
}
