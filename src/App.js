import './App.css';
import Header from './Component/Header.js';
import Content from './Component/Content.js';
import Footer from './Component/Footer.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <Content/> {/* commiting a change */}
      <Footer/>
    </div> 
  );
}

export default App;
