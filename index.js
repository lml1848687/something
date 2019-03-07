function AJAX(url, method) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      console.log("请求完成");
      if (xhr.response.status >= 200 && xhr.response.status < 300) {
        console.log("请求成功");
      }
    } else {
      console.log("请求失败了！！！！");
    }
  };
  xhr.send();
}

// function fn() {
//   console.log("1111111");
// }
// var lock = false;
// button.onclick = () => {
//   if (!lock) {
//     fn();
//     lock = true;
//     setTimeout(() => {
//       lock = false;
//     }, 3000);
//   }
// };
function throttle(fn, interval = 300) {
  let canRun = true;
  return function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, interval);
  };
}

// function fn() {
//   console.log("1111111");
// }
//var timeId = null;
// button.onclick = () => {
//   if (timeId) {
//     window.clearTimeout(timeId);
//   }
//   timeId = setTimeout(() => {
//     fn();
//     timeId = null;
//   }, 3000);
// };
function debounce(fn, interval = 300) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  };
}

function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

function Animal() {
  this.a = 1;
}

Animal.prototype.move = function() {};

function Dog() {
  Animal.apply(this, arguments);
  this.d = 2;
}

let f = function() {};
f.prototype = Animal.prototype;
Dog.prototype = new f();

Dog.prototype.constructor = Dog;

Dog.say = function() {};

class Dog extends Animal {
  constructor() {
    super();
  }
}

//数组去重
[...new Set(array)];
