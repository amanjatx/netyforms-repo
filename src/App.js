import './App.css';
import Content from './Component/Content.js';
import Footer from './Component/Footer.js';
import Header from './Component/Header';
import background from './Images/backimg.jpg';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <div className="App">
        <div style={{backgroundImage: `url(${background})`}}>
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
