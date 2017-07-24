import React from 'react';
export default class Bar extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    this.props.onFruitSelected(this.props.fruit)
  }

  render() {
    return <div onClick={this.handleClick.bind(this)} className="row text-left fruits-row">
      <div className="col-md-3">
        <a className="fruit-name bar-text">{this.props.fruit.name}</a>
      </div>
      <div className="col-md-8">
        <div className="bar">
          <div className="progress-track">
            <div className={"progress-fill bg-color-" + this.props.index} style={{width: this.props.fruit.percentage}}>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1">
        <span className="fruit-count bar-text">{this.props.fruit.count}</span></div>
    </div>
  }
}
