import './App.css';
import { Route, Routes } from 'react-router-dom';

import Main from './Pages/Main';
import SecondLab from './Pages/SecondLab';
import ThirdLab from './Pages/ThirdLab';
import FourthLab from './Pages/FourthLab';
import FifthLab from './Pages/FifthLab';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}  />
        <Route path="/second" element={<SecondLab />} />
        <Route path="/third" element={<ThirdLab />} />
        <Route path="/fourth" element={<FourthLab />} />
        <Route path="/fifth" element={<FifthLab />} />
      </Routes>
    </>
  );
}

export default App;
