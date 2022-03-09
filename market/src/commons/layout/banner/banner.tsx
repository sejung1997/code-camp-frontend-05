import * as banner from "./banner.styles";
import InfiniteScroll from "react-infinite-scroller";
import { removeLocal } from "../../function/Localstorage/index";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export default function BannerPage() {
  const { date, todayProduct, setTodayProduct } = useContext(GlobalContext);

  const deleteProduct = (id) => () => {
    setTodayProduct(removeLocal(date, id));
  };
  const onloadMore = () => {};
  return (
    <>
      <banner.img1 src="/images/2615A25051A5ABFF21.png" />
      <banner.img2 src="/images/pngwing.com (9).png" />
      <banner.TodayProduct>
        <banner.TodayLabel>오늘 본 상품</banner.TodayLabel>
        <InfiniteScroll pageStart={0} loadMore={onloadMore} hasMore={true}>
          {todayProduct?.map((el, index) => (
            <banner.DataWrapper key={el.id}>
              <span>
                {index + 1}. {el.name}
              </span>
              <banner.Img
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
              <div>{el.price}원</div>
              <banner.SmallBtn onClick={deleteProduct(el._id)}>
                삭제하기
              </banner.SmallBtn>
            </banner.DataWrapper>
          ))}
        </InfiniteScroll>
      </banner.TodayProduct>
    </>
  );
}
