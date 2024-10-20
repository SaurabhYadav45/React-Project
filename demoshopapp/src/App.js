import logo from './logo.svg';
import './App.css';
import './components/Product';
import Product from './components/Product';
import NewProduct from './components/NewProduct';

const App = () => {
  const Products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021,8,10),
    },
    {
      id: "p2",
      title: "Surf Excel",
      amount: 200,
      date : new Date(2021,10,20),
    },
    {
      id: "p3",
      title: "Tide",
      amount: 150,
      date : new Date(2021,10,16),
    },
    {
      id: "p4",
      title: "Eigee",
      amount: 250,
      date : new Date(2022,12,28),
    },
  ];

  function printProductData(data){
    console.log('I ma in App.js');
    console.log(data);
  }

  return (
    <div>
      <NewProduct printProduct = {printProductData}></NewProduct>
      <div className='app-page'>
      <Product items = {Products}></Product>
      </div>
    </div>
    
  );
}

export default App;
