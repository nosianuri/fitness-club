import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import auth from './firebase.init';


function App() {
  return (
    <div className="App">
      <Banner />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
