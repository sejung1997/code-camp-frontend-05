import FunctionalComponent from "../../../scr/components/units/21-functional-component/functionalComponent.container";
export default function MapElPage() {
  ["철", "훈", "영"].forEach((index, el) => {
    console.log(el); // 0 1 2
    console.log(index); // 철 훈 영
  });
  return <></>;
}
