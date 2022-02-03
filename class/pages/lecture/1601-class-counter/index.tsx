import { Component } from "react";
interface IState {
  count: number;
}
export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCounter = () => {
    console.log("zkdk");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
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
      </div>
    );
  }
}
