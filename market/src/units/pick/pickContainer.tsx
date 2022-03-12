import { gql, useQuery, useMutation } from "@apollo/client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ITEM_PICK } from "../Detail/gql&types";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../commons/types/generated/types";
import PickPageUI from "./pickPresenter";

const FETCH_USED_ITEMS_IPICK = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      name
      price
      _id
      images
      seller {
        name
      }
    }
  }
`;
export default function () {
  const [toggleUseditemPick] = useMutation(ITEM_PICK);
  const allToggle = useRef<HTMLInputElement>();
  const [isChecked, setIsChecked] = useState([]);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_IPICK, {
    variables: { search: "" },
  });

  let checkBoxData;
  useEffect(() => {
    if (!data) return;
    checkBoxData = new Array(data.fetchUseditemsIPicked.length).fill(1);
    localStorage.setItem("heart", JSON.stringify(data?.fetchUseditemsIPicked));
  }, [data]);

  let checkBoxes: any;
  if (process.browser) checkBoxes = document?.getElementById("checkALL");

  checkBoxes?.addEventListener("click", () => {
    console.log(checkBoxData);
    checkBoxData?.forEach((_, index) => {
      const checkBox: any = document.getElementById(`checkbox${index}`);
      checkBox.checked = checkBoxes.checked;
    });
  });
  const onClickBox = () => {
    const aaa = checkBoxData.filter((_, index) => {
      return document.getElementById(`checkbox${index}`).checked;
    });
    if (aaa.length === checkBoxData.length) checkBoxes.checked = true;
    if (aaa.length === 0) checkBoxes.checked = false;
  };

  const deletePick = (id) => async () => {
    const result = await toggleUseditemPick({
      variables: {
        useditemId: id,
      },
      update(cache, { data }) {
        const deletedId = id;
        cache.modify({
          fields: {
            fetchUseditemsIPicked: (prev, { readField }) => {
              const filterPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filterPrev];
            },
          },
        });
      },
    });

    localStorage.setItem("heart", JSON.stringify(data?.fetchUseditemsIPicked));

    console.log(result);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <PickPageUI
      data={data}
      settings={settings}
      deletePick={deletePick}
      isChecked={isChecked}
      allToggle={allToggle}
      onClickBox={onClickBox}
    />
  );
}
