import './App.css';
import Content from './Component/Content.js';
import Footer from './Component/Footer.js';
import Header2 from './Component/Header2';
import ContentDetail from './Component/ContentDetail';

function App() {
  return (
    <div className="App">
      <Header2 />
      <Content />
      <ContentDetail />
      <Footer />
    </div>

  );
}

export default App;
