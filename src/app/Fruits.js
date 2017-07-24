import React from 'react';
import Bar from './Bar/Bar'
export default class Fruits extends React.Component {
  constructor(props) {
    super(props);

    const self = this;

    const fruits = self.props.fruits.map(item => item.favoriteFruit)
      .reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});

    let fruitArray = Object.keys(fruits).map(key => ({count: fruits[key], name: key}))
      .sort((a, b) => parseFloat(a.count) - parseFloat(b.count)).reverse();

    const total = fruitArray.reduce((cnt, o) => cnt + o.count, 0);

    fruitArray = fruitArray.map(item => {
      item.percentage = (item.count * 100 / total).toFixed(2);
      return item;
    });

    self.state = {
      fruits: fruitArray,
      names:this.props.fruits,
      onFruitSelected:function(fruit){
        console.log(`Fruit selected: ${fruit.name}, ${fruit.count}`);
        let filteredList = self.props.fruits.filter((item,index)=>{
          return item.favoriteFruit === fruit.name;
        })
        self.setState(() => {
          return {names: filteredList};
        });
      }
    };

  }

  render() {
    return <div className="fruits-component">
      <div className="fruits-header">
      {this.state.fruits.map(function (item, index) {
        return <Bar key={index} index={index}  fruit={item} onFruitSelected={this.state.onFruitSelected} />
      }, this)}
      </div>
      <div className="fruits-content">
      {this.state.names.map(function (item, index) {
        return <div className="row person-row" key={index}>
          <div className="col-md-6">
            <span className="name">{item.name}</span>
          </div>
          <div className="col-md-6 text-right">
            <span className="fruit-name">{item.favoriteFruit}</span>
          </div>
          </div>
      }, this)}
      </div>
    </div>;
  }
}



