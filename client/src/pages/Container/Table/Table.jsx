import '../Container.css';
import { Row } from './Row';

export const Table = ({ charts, tickers }) => {
  return (
    <div className="tickerTable">
      <p className="tickerTableHeader">An interesting information for YOU</p>

      {Object.keys(tickers).map((ticker, index) => {
        const charData = [...charts[ticker]];
        return (
          <Row
            key={index}
            success={charData[charData.length - 1].success}
            ticker={tickers[ticker].ticker}
            price={tickers[ticker].price}
            change={tickers[ticker].change}
            change_percent={tickers[ticker].change_percent}
          />
        );
      })}
    </div>
  );
};
