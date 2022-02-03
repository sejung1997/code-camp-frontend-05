import { Component } from "react";
import Router from "next/router";
interface IState {
  count: number;
}
export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨");
    // input 태그 선택해서 포커스 깜빡
  }

  componentDidUpdate() {
    console.log("수정되고 다시그려짐");
  }

  componentWillUnmount() {
    console.log("여기서 나갈래요");
    // 나가기전에 마지막으로 할것들(백엔드에 채팅방 나감을 알리기)
  }

  onClickCounter = () => {
    console.log("zkdk");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>
        <button
          onClick={
            this.onClickCounter // .bind(this)//
          }
        >
          카운트 올리기!!!!!!!!!!!
        </button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
