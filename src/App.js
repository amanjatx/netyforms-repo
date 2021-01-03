import './App.css';
import Content from './Component/Content.js';
import Footer from './Component/Footer.js';
import Header2 from './Component/Header2';
// import ContentDetail from './Component/ContentDetail';
import background from './Images/backimg.jpg';
// import Rough2 from './Component/Rough2.js';

function App() {
  return (
    <div className="App">
      <div style={{backgroundImage: `url(${background})`}}>
      <Header2 />
      <Content />
      </div>
      {/* <ContentDetail /> */}
      {/* <Rough2 /> */}
      <Footer />
    </div>

  );
}

export default App;
