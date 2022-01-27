import BoardListPage from "../src/boards/list/boardList.container";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../src/boards/list/boardList.queries";

export default function BOARLISTPAGE() {
  const [startPage, setStartPage] = useState(1);
  const [curPage, setCurPage] = useState(1);
  // const [id, setId] = useState("1");

  const { data: a, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  console.log(a);

  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setCurPage(startPage - 10);
    refetch({ page: curPage });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setCurPage(startPage - 10);
    refetch({ page: curPage });
  };

  const onclickPage = (event) => {
    console.log(event.target.id);
    setCurPage(Number(event.target.id));
    refetch({ page: Number(event.target.id) });
    // setId(event.target.id);
    // console.log(id);
  };
  const Page = styled.div`
    width: 800px;
    justify-content: center;
    display: flex;
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    color: #fff;
    margin-top: 850px;
  `;
  const Span = styled.span`
    
    color: &{(class)}
    display: flex;

  
  `;
  const Num = styled.span`
    font-size: 20px;
    padding-right: 20px;
    padding-left: 20px;
    &:hover {
      color: red;
    }
    color: {
      ${id}
    }
  `;
  const PagePrev = styled.div`
    font-size: 20px;
  `;
  const PageNext = styled.div`
    font-size: 20px;
  `;
  const searchClick = () => {
    console.log(a);
  };
  return (
    <>
      <BoardListPage a={a} searchClick={searchClick} />
      <div>
        <Page>
          <PagePrev onClick={onClickPrevPage}>이전페이지</PagePrev>

          {new Array(10).fill(1).map(
            (_, index) =>
              index + startPage <= lastPage && (
                <Span
                  style={{ cursor: "pointer" }}
                  className={`${index + startPage}`}
                  onClick={onclickPage}
                  id={String(index + startPage)}
                  key={index + startPage}
                >
                  <Num id={String(index + startPage)}>{`${
                    index + startPage
                  }`}</Num>
                </Span>
              )
          )}
          <PageNext onClick={onClickNextPage}>다음페이지</PageNext>
        </Page>
      </div>
    </>
  );
}
