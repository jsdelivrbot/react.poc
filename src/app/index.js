import React from 'react';
import {render} from 'react-dom';
import '../app/master.scss';
import '../app/api/FruitasticApi';
import Fruits from '../app/Fruits'
console.log('Hey guys and ladies!!',FruitasticApi.get())

var data = [];

FruitasticApi.get(function(data){
  render(<Fruits fruits={data} />, document.getElementById('root'));
})





import boostrap from 'bootstrap'
