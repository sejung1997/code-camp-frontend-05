import * as List from "./Landing.styles";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import ReactPlayer from "react-player";

export default function LandingPageUI(props) {
  return (
    <>
      <List.List>
        <List.topTitle>베스트게시물</List.topTitle>
        <List.Row>
          {props.BestData?.fetchUseditemsOfTheBest.map((el) => (
            <List.Column key={el._id} onClick={props.movePage(el._id)}>
              <List.Title>{el.name}</List.Title>

              <List.Title>{el.seller.name}</List.Title>
              <Slider {...props.settings}>
                {el.images
                  .filter((x) => x)
                  .map((y) => (
                    <List.SliderItem
                      key={uuidv4()}
                      src={`https://storage.googleapis.com/${y}`}
                    ></List.SliderItem>
                  ))}
              </Slider>
              <List.Title>{el.createdAt.slice(0, 10)}</List.Title>
            </List.Column>
          ))}
        </List.Row>
      </List.List>
      <List.play>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lazygdZxyAU#t=1m"
          width={900}
          height={506}
          playing={true}
          muted={true}
        />
      </List.play>
    </>
  );
}