import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './compo/Nav';
import View1 from './view/view1'; // Pastikan nama file dan komponen sesuai
import View2 from './view/View2'; // Pastikan nama file dan komponen sesuai
import View3 from './view/View3'; // Pastikan nama file dan komponen sesuai
import View4 from './view/View4'; // Pastikan nama file dan komponen sesuai
import View5 from './view/View5'; // Pastikan nama file dan komponen sesuai
import View6 from './view/View6'; // Pastikan nama file dan komponen sesuai

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<View1 />} />
        <Route path="/zkoolday" element={<View2 />} />
        <Route path="/prince" element={<View3 />} />
        <Route path="/princess" element={<View4 />} />
        <Route path="/seilors" element={<View5 />} />
        <Route path="/duck" element={<View6 />} />
      </Routes>
      {/* <Foter /> */}
    </div>
  );
}

export default App;
