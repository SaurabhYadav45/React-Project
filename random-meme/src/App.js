import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';


function App() {
  return (
    <div className="background flex flex-col items-center h-screen w-full overflow-x-hidden ">
        <h1 className='w-11/12 bg-white text-4xl font-bold text-center px-[10px] py-2 mt-[40px] rounded-lg '>Random Gifs</h1>
        <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random></Random>
        <Tag></Tag>
        </div>

    </div>
  );
}

export default App;
