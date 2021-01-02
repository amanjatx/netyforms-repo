import './App.css';
import Content from './Component/Content.js';
import Footer from './Component/Footer.js';
import Header2 from './Component/Header2';
import ContentDetail from './Component/ContentDetail';
// import Rough2 from './Component/Rough2.js';

function App() {
  return (
    <div className="App">
      <Header2 />
      <Content />
      <ContentDetail />
      {/* <Rough2 /> */}
      <Footer />
    </div>

  );
}

export default App;
