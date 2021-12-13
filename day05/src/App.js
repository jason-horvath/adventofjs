import './App.css';
import EpisodeList from './components/EpisodeList';

function App() {
  return (
    <div className="wrapper">
      <div className="cover">
        <img src="./images/podcast-cover.png" alt="Compressed.fm" />
      </div>
      <div className="content">
        <h1>Listen to all the Compressed.fm Episodes</h1>
        <EpisodeList/>
      </div>
    </div>
  );
}

export default App;
