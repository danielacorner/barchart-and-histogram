import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
import exampleData from './data';

// TODO 2: TagBreakdownChart: render one bar for each tag in each category
// for a responsive height, we set the container width and height, then set the bar dimensions with % units
// use d3.scale to create the scale function (domain = min(bars[tagName].time), range = 0, 100)
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
      <BarChart data={exampleData} />
    </div>
  );
}

export default App;
