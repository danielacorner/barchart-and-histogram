import React from 'react';
import styled from 'styled-components/macro';

const exampleDatum = {
  '': 123,
  tge_datetime: '2019-07-09 08:19:56.948999882-04:00',
  tlt_datetime: '2019-07-09 08:24:26.934999943-04:00',
  d: 269.98600006103516,
  pl_category: 'Planned',
  tag_name: 'Roll Change',
  user: 'team.c',
  sku_name: 1830,
  mach: 'Winder',
};

const BarChartStyles = styled.div`
  width: 600px;
  height: 500px;
`;

export default ({ data, plCategory }) => {
  console.log('🌈: data', data);

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

  const barDurationsArray = Object.values(bars).map(bar => bar.duration);
  const maxDuration = Math.max(...barDurationsArray);
  console.log('🌈: maxDuration', maxDuration);

  // TODO: for a responsive height, we set the container width and height, then set the bar dimensions with % units
  // TODO: set bar percent width based on maxDuration
  // TODO: set bar opacity based on mapping index
  return (
    <BarChartStyles className="barChart">
      {Object.entries(bars).map(([tagName, { duration }]) => (
        <div key={tagName}>
          <div>{tagName}</div>
          <div>{duration}</div>
        </div>
      ))}
    </BarChartStyles>
  );
};