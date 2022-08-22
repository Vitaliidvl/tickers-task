import React from 'react';
import { InfoRow } from './InfoRow';

export const Info = ({ success, tickerData }) => {
  console.log(success);
  console.log(tickerData);
  return (
    <div className="tickerInfo">
      {Object.keys(tickerData).map((ticker, index) => (
        <InfoRow key={index} field={ticker} value={tickerData[ticker]} success={success} />
      ))}
    </div>
  );
};
