import './App.css';
import Background from './components/Background';
import Clock from './components/Clock';
import Remo from './components/Remo';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Background />
        <Remo />
        <Clock />
      </div>
      <style jsx>
        {`
        .content {
          position: fixed;
          left: 100px;
          bottom: 60px;
        }
        `}
      </style>
      <style jsx global>
        {`
        body {
          font-family: 'M PLUS 1p', sans-serif;
          color: white;
        }
        `}
      </style>
    </div>
  );
}

export default App;
