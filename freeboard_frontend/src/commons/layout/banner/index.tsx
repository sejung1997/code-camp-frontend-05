/* eslint-disable no-use-before-define */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export default function d() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const H3 = styled.div`
    background-color: red;
    color: #fff;
    font-size: 30px;
    height: 100px;
    text-align: center;
  `;
  const H2 = styled.div`
    font-size: 50px;
    text-align: center;
    background-color: black;
    background-repeat: no-repeat;
    color: #fff;
    height: 200px;

    margin: auto;
    background-size: cover;
  `;
  return (
    <div>
      <H2> 게시판 메뉴</H2>
      <Slider {...settings}>
        <div>
          <H3>
            게시판 목록
            <img src="/fgh" alt="" />
          </H3>
        </div>
        <div>
          <H3>게시판 등록</H3>
        </div>
        <div>
          <H3>게시판 삭제</H3>
        </div>
        <div>
          <H3>로그인</H3>
        </div>
        <div>
          <H3>회원가입</H3>
        </div>
      </Slider>
    </div>
  );
}
