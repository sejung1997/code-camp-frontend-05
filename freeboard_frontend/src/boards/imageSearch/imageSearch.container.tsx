import ImageSearchPageUI from "./imageSearch.presenter";
import axios from "axios";
import { useState } from "react";

export default function ImageSearchPage() {
  const [data, setData] = useState();
  const [inputs, setInputs] = useState({
    lon: "",
    lat: "",
    dim: "",
  });
  const setLocation = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const searchImg = () => {
    console.log(inputs);
    const fetchPlanet = async () => {
      const result = await axios.get(
        `https://api.nasa.gov/planetary/earth/assets?lon=${Number(
          inputs.lon
        )}&lat=${Number(
          inputs.lat
        )}&date=2018-01-06&api_key=ybXmAgw7FxGZA8zMryAhdMLoKBGO2eFhaxrsjTAv&dim=${Number(
          inputs.dim
        )}`
      );
      setData(result?.data);
    };
    fetchPlanet();
  };

  return (
    <ImageSearchPageUI
      data={data}
      searchImg={searchImg}
      setLocation={setLocation}
    />
  );
}
