// import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import Intro from './components/Intro';
import WebSites from './components/WebSites';
import Apps from './components/Apps';


function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <WebSites />
      <Apps />
    </div>
  );
}

export default App;
