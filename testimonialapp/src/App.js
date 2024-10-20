import logo from './logo.svg';
import './App.css';
import reviews  from './Data';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <div className="App flex  flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-200 ">
       <h1 className='text-4xl text-center font-bold'>Our Testimonials</h1>
       <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
       <Testimonial reviews = {reviews}></Testimonial>
    </div>
  );
}

export default App;
