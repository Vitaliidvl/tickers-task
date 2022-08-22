import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Container } from './pages/Container/Container';
import { Ticker } from './pages/Ticker/Ticker';
import { setData } from './redux/slices/chartSlices';
import { setCurrentPrice } from './redux/slices/tickersSlices';

export const App = () => {
  const dispatch = useDispatch();
  const socket = io('http://localhost:4000');

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (quotes) => {
      dispatch(setCurrentPrice([...quotes]));
      dispatch(setData([...quotes]));
    });
    return () => {
      socket.close();
    };
  }, [dispatch, socket]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/ticker" element={<Ticker />} />
      </Routes>
    </BrowserRouter>
  );
};
