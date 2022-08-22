import { useNavigate } from 'react-router-dom';
import '../Container.css';
import '../../Container/Price.css';
import { Label } from './Label';
import { Price } from '../Price';

export const Row = ({ success, ticker, price, change, change_percent }) => {
  const navigate = useNavigate();
  const onClick = () => navigate(`/ticker?name=${ticker}`);
  return (
    <div className="tickerRow" onClick={onClick}>
      <Label ticker={ticker} />
      <div>{`$${price}`}</div>
      <div className={`${success ? 'up' : 'down'}`}>{`${success ? '+' : '-'}$${change}`}</div>
      <Price change_percent={change_percent} success={success} />
    </div>
  );
};
