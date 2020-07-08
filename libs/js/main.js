window.addEventListener('load', () => {
  $('h1').addClass('ready');
  $('.bio').addClass('ready');
  $('li').addClass('ready');
});
// document.addEventListener('mousemove', (e) => {
//   const [offsetX, offsetY] = [e.x / document.body.clientWidth, e.y / document.body.clientHeight];
//   $('h1').setStyle(`transform`,`translate(${-10 + 20 * offsetX}px,${-10 + 20 * offsetY}px)`);
//   $('.bio').setStyle(`transform`,`translate(${5 - 10 * offsetX}px,${-5 + 10 * offsetY}px)`);
// });

class Rail {

  static getInstance(selector) {
    if (!Rail.instances) Rail.instances = {};
    if (!Rail.instances[selector]) Rail.instances[selector] = new Rail(selector);
    return Rail.instances[selector];
  }

  static filter(arr, func) {
    const res = [];
    for (let item of arr) if (func(item)) res.push(item);
    return res;
  }

  constructor(selector) {
    this.ele = document.querySelectorAll(selector);
  }

  addClass(className) {
    for (let item of this.ele) {
      const classArr = Rail.filter(item.className.split(' '), (cls) => !!cls);
      classArr.push(className);
      item.className = classArr.join(' ');
    }
    return this;
  }

  removeClass(className) {
    for (let item of this.ele) {
      const classArr = item.className.split(' ');
      item.className = Rail.filter(classArr, (cls) => cls !== className).join(' ');
    }
    return this;
  }

  getOrigionalElement(idx) {
    if (!!idx) return this.ele[idx];
    return this.ele;
  }

  setStyle(styleName, styStr) {
    for (let item of this.ele) {
      item.style[styleName] = styStr;
    }
    return this;
  }
}
window.$ = (selector) => {
  return Rail.getInstance(selector);
};