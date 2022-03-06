import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../commons/types/generated/types";
import PickPageUI from "./pickPresenter";
export default function () {
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

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_IPICK, {
    variables: { search: "" },
  });

  console.log(data?.fetchUseditemsIPicked);
  console.log("data?.fetchUseditemsIPicked");
  useEffect(() => {
    if (!data) return;
    const checkBoxes = document?.getElementById("checkALL");
    localStorage.setItem("heart", JSON.stringify(data?.fetchUseditemsIPicked));
    checkBoxes?.addEventListener("click", () => {
      data?.fetchUseditemsIPicked?.forEach((_, index) => {
        const checkBox = document.getElementById(`checkbox${index}`);
        checkBox.checked = checkBoxes.checked;
      });
    });
  }, [data]);
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
  return <PickPageUI data={data} settings={settings} />;
}
