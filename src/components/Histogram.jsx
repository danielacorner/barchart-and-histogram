import React from 'react';
import styled from 'styled-components/macro';

const HistogramStyles = styled.div`
  width: 600px;
  height: 500px;
`;

export default ({ data, plCategory }) => {
  // filter data by pl_category
  const filteredData = data.filter(datum => datum.pl_category === plCategory);

  // one bar per tag_name
  const bars = filteredData.reduce((barsAcc, segment) => {
    // segment duration
    const [ge, lt] = [
      new Date(segment.tge_datetime).getTime(),
      new Date(segment.tlt_datetime).getTime(),
    ];
    const duration = lt - ge;

    if (Object.keys(barsAcc).includes(segment.tag_name)) {
      // add to the bar if it exists
      barsAcc[segment.tag_name].duration += duration;
    } else {
      // or create the bar if it doesn't
      barsAcc[segment.tag_name] = { duration };
    }
    return barsAcc;
  }, {});
  console.log('🌈: bars', bars);

  return (
    <HistogramStyles className="barChart">
      <div className="hey">HELLOOOO</div>
      {Object.entries(bars).map(([tagName, { duration }]) => (
        <div key={tagName}>
          <div>{tagName}</div>
          <div>{duration}</div>
        </div>
      ))}
    </HistogramStyles>
  );
};
