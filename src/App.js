import './App.css';
import Routing from './Component/Routing.js';
import Footer from './Component/Footer.js';
import Header from './Component/Header';
import background from './Images/backimg.jpg';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL} >
      <div className="App">
        <div style={{backgroundImage: `url(${background})`}}>
          <Header />
          <Routing />
        </div>
        <Footer />
      </div>
    </HashRouter>

  );
}

export default App;
