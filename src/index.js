// import _ from 'lodash';
import './style.scss';
import {cube} from './math';

function component() {
  let element = document.createElement('div');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  element.classList.add('hello');
  return element;
}

function grid() {
  let parent = document.createElement('div');
  parent.classList.add('wrapper');
  [1, 2, 3, 4, 5, 6].forEach(index => {
    let child = document.createElement('div');
    child.innerHTML = index;
    child.classList.add('box');
    parent.appendChild(child)
  });
  return parent;
}

function lodashImportTest() {
  // using babel-plugin-lodash, webpack cherry picks join to package and not the entire lodash library
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // todo: produciton mode doesnt work, probably something to do with babel. Do babel tutorial
}

fetch("someurl")
  .then(result => result)
  .catch(err => err)

document.body.appendChild(component());
document.body.appendChild(grid());

var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

const aa = [2, 3];
const cc = [...aa].includes(2);
