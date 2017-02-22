'use strict';

function newElement(elType, elAttribute, elAttributeName, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute(elAttribute, elAttributeName);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

var imgs = JSON.parse(localStorage.imgs);

function chartWorkPlease(){
  var ctx = document.getElementById('click-chart').getContext('2d');
  var pct = document.getElementById('percent-chart').getContext('2d');

  var clickData = [];
  var labelNames = [];
  var percentageData = [];
  var chartColors = [];
  var shownData = [];

  function pushChartArrs() {
    for (var i = 0; i < imgs.length; i++) {
      labelNames.push(imgs[i].name);
      clickData.push(imgs[i].numClicked);
      percentageData.push(imgs[i].percentage);
      shownData.push(imgs[i].numShown);
    }
  }
  pushChartArrs();
  // console.log(clickData);
  // console.log(labelNames);

//----------Click chart---------------------V
  var clickChart = {
    type: 'bar',
    data: {
      labels: labelNames,
      datasets: [{
        label: 'Number of Clicks',
        data: clickData,
        backgroundColor: 'white'
      },{
        label: 'Number of Views',
        data: shownData,
        backgroundColor: 'lightgrey'
      }],
    },
    options: {
      legend: {labels:{fontColor:'#fff', fontSize: 18}},
      scales: {
        yAxes: [{
          ticks: {
            fontColor:'#fff',
            beginAtZero:true
          }
        }],
        xAxes:[{
          ticks: {
            fontColor:'#fff'
          }
        }]
      }
    }
  };
//------------------------------------------A

//-------% chart---------------------V
  var percChart = {
    type: 'polarArea',
    data: {
      labels: labelNames,
      datasets: [{
        label: 'Percentage of Clicks',
        data: percentageData,
        backgroundColor: 'white'
      }],
    },
    options: {
      legend: {labels:{fontColor:'#fff'}},
      scales: {
        yAxes: [{
          ticks: {
            fontColor:'#fff',
            beginAtZero:true
          }
        }],
        xAxes:[{
          ticks: {
            fontColor:'#fff'
          }
        }]
      }
    }
  };
//-------------------------------------------A
  var myChart = new Chart(ctx, clickChart);
  var myChart = new Chart(pct, percChart);
}

newElement('canvas', 'id', 'click-chart', 'canvases', '');
newElement('canvas', 'id', 'percent-chart', 'canvases', '');
chartWorkPlease();
