import { useSelector } from 'react-redux';
import './Container.css';
import { Table } from './Table/Table';

export const Container = () => {
  const tickers = useSelector((state) => state.tickers);
  const charts = useSelector((state) => state.chart);
  return (
    <div className="container">
      <Table charts={charts} tickers={tickers} />
    </div>
  );
};
