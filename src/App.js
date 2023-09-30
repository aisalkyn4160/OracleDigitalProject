import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Prices } from './pages/Prices';
import { Products } from './pages/Products';
import { Contacts } from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/prices' element={<Prices/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='contacts' element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
