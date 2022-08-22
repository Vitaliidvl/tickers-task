import React from 'react';
import { getName } from '../../../utils';

export const Label = ({ ticker }) => {
  return (
    <div className="tickerName">
      <div className={`tickerLabel ${ticker}`}>{ticker}</div>
      <div>{getName(ticker)}</div>
    </div>
  );
};
