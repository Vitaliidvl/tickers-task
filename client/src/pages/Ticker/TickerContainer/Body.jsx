import React from 'react';
import { Chart } from './Chart';
import { Info } from './Info/Info';

export const Body = ({ data, tickerData, price, change_percent }) => {
  const success = data[data.length - 1].success;
  return (
    <div className="tickerBody">
      <Chart data={data} success={success} price={price} change_percent={change_percent} />
      <Info success={success} tickerData={tickerData} />
    </div>
  );
};
