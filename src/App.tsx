// src/App.tsx

import { Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aqui é onde a página da rota atual será renderizada */}
      </main>
      <Footer id="contato"/>
    </>
  );
}

export default App;