import React, { useState } from 'react';
import BarChart from './components/BarChart';
import exampleData from './data';
import Histogram from './components/Histogram';

export const PL_CATEGORIES = {
  PLANNED: { label: 'Planned', color: 'blue' },
  UNPLANNED: { label: 'Unplanned', color: 'orange' },
};

function App() {
  // hide the histogram, and only show it when you click on a BarChart bar
  const initialState = null;
  const [histogramPlCategory, setHistogramPlCategory] = useState(initialState);

  // TODO: map out a bar chart for each PL category
  // TODO: pass in that category, and set all the values based on it

  return (
    <div className="App">
      <BarChart
        data={exampleData}
        plCategory={PL_CATEGORIES.PLANNED.label}
        {...{ setHistogramPlCategory, histogramPlCategory }}
      />
      {/* <BarChart data={exampleData} plCategory={PL_CATEGORIES.UNPLANNED.label} /> */}
      {histogramPlCategory && (
        <Histogram data={exampleData} plCategory={histogramPlCategory} />
      )}
    </div>
  );
}

export default App;
