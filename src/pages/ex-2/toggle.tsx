import React, { Component } from "react";

class Modal extends Component<{ onClose: Function; data: number }> {
  state: { backgroundColor: string } = { backgroundColor: "white" };
  changeBackgroundColor = (color: string) => {
    this.setState({ backgroundColor: color });
  };
  listColor = ["red", "brown", "violet"];
  render() {
    const style = {
      backgroundColor: this.state.backgroundColor,
    };
    return (
      <div className="container-modal">
        <div className="modal" style={style}>
          <h3>{this.props.data}</h3>
          <h1>Đây là modal</h1>
          <button onClick={() => this.props.onClose(false)}>Close</button>
          <button onClick={() => this.changeBackgroundColor("purple")}>
            purple
          </button>
          {this.listColor.map((lorco) => (
            <button
              key={lorco}
              onClick={() => this.changeBackgroundColor(lorco)}
              style={{ backgroundColor: lorco }}
            >
              {lorco}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Modal;
