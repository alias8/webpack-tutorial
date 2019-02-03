// import _ from 'lodash';
// import './style.css';
import {cube} from './math.js';


function component() {
  let element = document.createElement('div');

  // using babel-plugin-lodash, webpack cherry picks join to package and not the entire lodash library
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // todo: produciton mode doesnt work, probably something to do with babel. Do babel tutorial
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
