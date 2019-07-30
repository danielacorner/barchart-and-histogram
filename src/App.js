import React, { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import exampleData from './data';
import Histogram from './components/Histogram';

const PL_CATEGORIES = {
  PLANNED: { label: 'Planned', color: 'blue' },
  UNPLANNED: { label: 'Unplanned', color: 'orange' },
};

function App() {
  // hide the histogram, and only show it when you click on a BarChart bar
  const [histogramPlCategory, setHistogramPlCategory] = useState(null);
  return (
    <div className="App">
      <BarChart data={exampleData} plCategory={PL_CATEGORIES.PLANNED.label} />
      {/* <BarChart data={exampleData} plCategory={PL_CATEGORIES.UNPLANNED.label} /> */}
      {histogramPlCategory && (
        <Histogram data={exampleData} plCategory={histogramPlCategory} />
      )}
    </div>
  );
}

export default App;
