export const getDate = (date) => {
  const splited = date.toString().split(' ');
  return `${splited[1]} ${splited[2]}, ${splited[4]}`;
};
export const getTime = (date) => {
  return date.toString().split(' ')[4];
};

export const getInfoRow = (field) => {
  const infos = {
    ticker: 'Ticker',
    exchange: 'Exchange',
    price: 'Current price',
    change: 'Last change',
    change_percent: 'Last change percent',
    dividend: 'Dividend',
    yield: 'Yield',
    last_trade_time: 'Last trade time',
  };
  return infos[field];
};

export const getName = (ticker) => {
  if (ticker === 'AAPL') return 'Apple Inc';
  if (ticker === 'GOOGL') return 'Alphabet Inc Class A';
  if (ticker === 'MSFT') return 'Microsoft Corporation ';
  if (ticker === 'AMZN') return 'Amazon.com Inc ';
  if (ticker === 'FB') return 'Meta Platforms Inc ';
  if (ticker === 'TSLA') return 'Tesla Inc ';
};

export const getValue = (field, value, success) => {
  if (field === 'ticker') return getName(value);
  if (field === 'exchange') return value;
  if (field === 'price') return `$${value}`;
  if (field === 'change') return `${success ? '+' : '-'}$${value}`;
  if (field === 'change_percent') return `${value}%`;
  if (field === 'dividend') return value;
  if (field === 'yield') return value;
  if (field === 'last_trade_time') return getDate(new Date(value).toString());
};
