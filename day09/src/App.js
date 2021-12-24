import './App.css';
import Carousel from './components/Carousel'
import { CarouselProvider } from './context/CarouselContext'

function App() {
  return (
    <div className="App">
      <CarouselProvider>
        <Carousel />
      </CarouselProvider>
    </div>
  );
}

export default App;
