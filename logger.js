import * as TYPE_LOG2 from './constant.js';
const {l,w,e} = TYPE_LOG2;
console.log(l,w,e);
console.log('TYPE_LOG2:::', TYPE_LOG2);
function logger(message, type = TYPE_LOG2) {
  return console[type](message);
}

export default logger;
