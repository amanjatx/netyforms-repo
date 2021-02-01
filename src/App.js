import './App.css';
import Content from './Component/Content.js';
import Footer from './Component/Footer.js';
// import ContentDetail from './Component/ContentDetail';
import Header from './Component/Header';
import background from './Images/backimg.jpg';
import ContactPage from './Component/ContactPage';

function App() {
  return (
    
    <div className="App">
      <div style={{backgroundImage: `url(${background})`}}>
        <Header />
        <Content  />
      </div>
      <Footer />
    </div>

  );
}


export default App