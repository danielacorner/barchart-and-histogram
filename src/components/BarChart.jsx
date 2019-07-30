import React from 'react';
import styled from 'styled-components/macro';
import * as d3 from 'd3';

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

const PL_CATEGORIES = {
  PLANNED: 'Planned',
};

export default ({ data }) => {
  console.log('🌈: data', data);
  // filter data by pl_category
  const filteredData = data.filter(
    datum => datum.pl_category === PL_CATEGORIES.PLANNED
  );
  // one bar per tag_name
  const bars = filteredData.reduce((barsAcc, segment) => {
    const [ge, lt] = [
      new Date(segment.tge_datetime).getTime(),
      new Date(segment.tlt_datetime).getTime(),
    ];
    const duration = lt - ge;
    if (Object.keys(barsAcc).includes(segment.tag_name)) {
      barsAcc[segment.tag_name].duration += duration;
    } else {
      barsAcc[segment.tag_name] = { duration };
    }
    return barsAcc;
  }, {});

  return (
    <BarChartStyles className="barChart">
      {Object.entries(bars).map(([tagName, { duration }]) => (
        <>
          <div>{tagName}</div>
          <div>{duration}</div>
        </>
      ))}
    </BarChartStyles>
  );
};
