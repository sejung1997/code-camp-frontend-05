import { async } from "@firebase/util";
import axios from "axios";
import { useState } from "react";

export default function () {

  const nationCode = async () => {
    const code = await axios.get(`http://apis.data.go.kr/1360000/GtsInfoService/getGtsStn?serviceKey=0zutXD8yEEweCz9Uh%2FwbtV4s4wdqNA9HpAbHo%2BwGT%2FBha6%2BoPjF3NEjwVWa6CQSv175FIKzz693kFnADApaJuA%3D%3D
      &numOfRows=1&pageNo=1&cc=${ }`)

  }
  return(

  )
}