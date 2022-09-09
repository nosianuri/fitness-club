import './App.css';
import Banner from './components/Banner/Banner';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Banner />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
