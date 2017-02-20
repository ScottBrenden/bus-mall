'use strict';

function newElement(elType, elAttribute, elAttributeName, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute(elAttribute, elAttributeName);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

function newImgInputEl(elSrc, elId){
  var el = document.createElement('input');
  el.setAttribute('type', 'image');
  el.setAttribute('src', elSrc);
  el.setAttribute('id', elId);
  el.setAttribute('class', 'img-option');
  var parentEl = document.getElementById('img-selector');
  parentEl.appendChild(el);
}

function imgObject(name, pathTo) {
  this.name = name,
  this.pathTo = pathTo,
  this.numShown = 0,
  this.numClicked = 0;
}

imgObject.prototype.percentClick = function(){
  var percentage = 100 * (this.numClicked / this.numShown);
};

var bag = new imgObject('bag', 'img\\bag.jpg');
var banana = new imgObject('banana', 'img\\banana.jpg');
var bathroom = new imgObject('bathroom', 'img\\bathroom.jpg');
var boots = new imgObject('boots', 'img\\boots.jpg');
var breakfast = new imgObject('breakfast', 'img\\breakfast.jpg');
var bubblegum = new imgObject('bubblegum', 'img\\bubblegum.jpg');
var chair = new imgObject('chair', 'img\\chair.jpg');
var cthulhu = new imgObject('cthulhu', 'img\\cthulhu.jpg');
var dogDuck = new imgObject('dogDuck', 'img\\dog-duck.jpg');
var dragon = new imgObject('dragon', 'img\\dragon.jpg');
var pen = new imgObject('pen', 'img\\pen.jpg');
var petSweep = new imgObject('petSweep', 'img\\pet-sweep.jpg');
var scissors = new imgObject('scissors', 'img\\scissors.jpg');
var shark = new imgObject('shark', 'img\\shark.jpg');
var sweep = new imgObject('sweep', 'img\\sweep.png');
var tauntaun = new imgObject('tauntaun', 'img\\tauntaun.jpg');
var unicorn = new imgObject('unicorn', 'img\\unicorn.jpg');
var usb = new imgObject('usb', 'img\\usb.gif');
var waterCan = new imgObject('waterCan', 'img\\water-can.jpg');
var wineGlass = new imgObject('wineGlass', 'img\\wine-glass.jpg');

var imgs = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function randomImgNum(){
  var ranNum = Math.floor(Math.random() * imgs.length);
  return ranNum;
}
console.log(randomImgNum());

var perviousImgs = [99, 99, 99];
var votes = 0;
