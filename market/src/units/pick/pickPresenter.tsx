import { ButtonDelete } from "../Detail/styles";
import { useMovePage } from "../../commons/function/movePage";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import * as pick from "./styles";

export default function PickPageUI(props) {
  const movePage = useMovePage();

  return (
    <>
      <pick.Main>
        <pick.Label>찜한상품</pick.Label>

        <pick.DIV>
          <pick.CheckBox type="checkbox" id="checkALL" />
          <pick.LabelCheckBox>모두선택</pick.LabelCheckBox>
        </pick.DIV>
        <div>
          {props.data &&
            props.data?.fetchUseditemsIPicked?.map((el, index) => (
              <pick.Contents key={index}>
                <pick.CheckBox type="checkbox" id={`checkbox${index}`} />

                <pick.Wrpper>
                  <pick.basicInfo>
                    <pick.DIV>판매자: {el.seller.name}</pick.DIV>
                    <pick.DIV>상품명: {el.name}</pick.DIV>
                    <pick.DIV>가격: {el.price}원</pick.DIV>
                  </pick.basicInfo>
                  <pick.imgGroup>
                    {el.images
                      .filter((x) => x)
                      .slice(0, 3)
                      .map((y) => (
                        <pick.SliderItem
                          key={uuidv4()}
                          src={`https://storage.googleapis.com/${y}`}
                        ></pick.SliderItem>
                      ))}
                  </pick.imgGroup>

                  <pick.BtnGroup>
                    <ButtonDelete onClick={movePage(`/${el._id}`)}>
                      이동하기
                    </ButtonDelete>
                    <ButtonDelete onClick={props.deletePick(el._id)}>
                      삭제하기
                    </ButtonDelete>
                  </pick.BtnGroup>
                </pick.Wrpper>
              </pick.Contents>
            ))}
        </div>
      </pick.Main>
    </>
  );
}
