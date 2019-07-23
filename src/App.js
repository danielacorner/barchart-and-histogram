import React from 'react';
import './App.css';
import * as d3 from 'd3';

const rawData = [
  {
    pnlCategory: 'unplanned',
    color: 'hsl(210,60%,50%)',
    tags: [
      { tagName: 'operator exploded', time: 1000 },
      { tagName: 'operator exploded', time: 2000 },
      { tagName: 'operator imploded', time: 2000 },
      { tagName: 'operator imploded', time: 2000 },
      { tagName: 'operator imploded', time: 3000 },
      { tagName: 'operator imploded', time: 4000 },
      { tagName: 'operator imploded', time: 10000 },
    ],
  },
  {
    pnlCategory: 'waiting',
    color: 'hsl(40,60%,50%)',
    tags: [
      { tagName: 'waiting for stuff', time: 1000 },
      { tagName: 'waiting for things', time: 2000 },
      { tagName: 'waiting for stuff', time: 2000 },
      { tagName: 'waiting for stuff', time: 2000 },
      { tagName: 'waiting for no reason', time: 3000 },
      { tagName: 'waiting for things', time: 4000 },
      { tagName: 'waiting for things', time: 10000 },
    ],
  },
];
console.log('💡: rawData', rawData);

// TODO 1: use vanilla JavaScript to clean rawData for a TagBreakdownChart
// tag name > bar length is based on sum of time events has a tag name, count of events, sum of time of events
let bars = {};

rawData[0].tags.forEach(({ tagName, time }, idx) => {
  if (Object.keys(bars).includes(tagName)) {
    bars[tagName].time += time;
  } else {
    bars[tagName] = { time };
  }
});
console.log('💡: bars', bars);

// TODO 2: TagBreakdownChart: render one bar for each tag in each category
// for a responsive height, let's use vh units between 0 and 50
// use d3.scale to create the scale function (domain = min(bars[tagName].time), range = 0, 50)
// https://github.com/d3/d3-scale
// var x = d3.scaleLinear()
//     .domain([10, 130]) // domain = input
//     .range([0, 960]);  // range  = output

// x(20); // 80
// x(50); // 320

// const scaleY = d3.scaleLinear()
//                  .domain([0,Math.max(...bars.map(bar=>bar.time))])
//                  .range([0,50])
// const TagBreakdownChart =

// TODO 3: TagHistogram: create a histogram for each category
// const TagHistogram =

// TODO 4: hide the histograms, and only show the relevant one when you click on a TagBreakdownChart bar

function App() {
  return (
    <div className="App">
      {Object.entries(bars).map(([tagName, dataObj]) => (
        <>
          <div>{tagName}</div>
          <div>{dataObj.time}</div>
        </>
      ))}
    </div>
  );
}

export default App;
