import './App.css';
import Banner from './components/Banner/Banner';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';

function App() {
  return (
    <div className="App">
      <Banner />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
