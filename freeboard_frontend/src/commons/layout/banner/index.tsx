/* eslint-disable no-use-before-define */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function d() {
  const router = useRouter();
  const address = router.asPath;
  console.log(router.asPath[1]);
  const Slider = styled.div`
    background-color: red;
    font-size: 23px;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2;
  `;
  const H2 = styled.div`
    font-size: 35px;
    background-color: black;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    height: 150px;
  `;
  const H3 = styled.div`
    color: #fff;
    width: 200px;
    padding: 20px 10px;
    text-align: center;
    background-color: ${address.length === 25 ? "black" : ""};
    :hover {
      background-color: black;
      cursor: pointer;
    }
  `;
  const H3M = styled.div`
    color: #fff;
    width: 200px;
    padding: 20px 10px;
    text-align: center;
    :hover {
      background-color: black;
      cursor: pointer;
    }
  `;
  const H3N = styled.div`
    color: #fff;
    width: 200px;
    padding: 20px 10px;
    text-align: center;
    background-color: ${address[1] === "N" ? "black" : ""};
    :hover {
      background-color: black;
      cursor: pointer;
    }
  `;
  const H3L = styled.div`
    color: #fff;
    width: 200px;
    padding: 20px 10px;
    text-align: center;
    background-color: ${address[1] === "b" ? "black" : ""};
    :hover {
      background-color: black;
      cursor: pointer;
    }
  `;
  const H3E = styled.div`
    color: #fff;
    width: 200px;
    padding: 20px 10px;
    text-align: center;
    background-color: ${address[address.length - 2] === "i" ? "black" : ""};
    :hover {
      background-color: black;
      cursor: pointer;
    }
  `;
  const a = () => {
    router.push("/boardList");
  };
  return (
    <div>
      <H2> 자유 게시판</H2>
      <Slider>
        <H3L onClick={a}>게시판 목록</H3L>

        <H3>게시글 보기</H3>

        <H3N>게시판 등록</H3N>

        <H3E>게시판 수정</H3E>

        <H3M>마이페이지</H3M>
      </Slider>
    </div>
  );
}
