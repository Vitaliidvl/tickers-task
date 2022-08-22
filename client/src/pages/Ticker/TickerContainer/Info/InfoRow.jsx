import { getInfoRow } from '../../../../utils';
import { getValue } from '../../../../utils';
import { ReactComponent as ArrowDown } from '../../../../assets/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../../../../assets/arrowUp.svg';
import '../../../Container/Price.css';

export const InfoRow = ({ field, value, success }) => {
  return (
    <div className="tickerInfoRow">
      <div className="field">{getInfoRow(field).toUpperCase()}</div>
      <div className="fieldValue">
        {field === 'change_percent' ? (
          <span className="tickerArrow">{success ? <ArrowUp /> : <ArrowDown />}</span>
        ) : null}
        {getValue(field, value, success)}
      </div>
    </div>
  );
};
