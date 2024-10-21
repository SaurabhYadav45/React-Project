import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const[dataForm, setDataForm]= useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    countryName: "",
    streetAddress: "",
    cityName: "",
    stateName: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event){
    const{name, type, value, checked } = event.target;
    setDataForm((prev) =>{
      return {...prev, [name]: type === "checkbox" ? checked :  value};
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("printing final data");
    console.log(dataForm);
  }

  return(
    <div className="flex flex-col items-center mt-2">
      <h2 className='font-bold text-2xl'>Registration Form</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName' className='font-bold'>First Name</label>
        <br></br>
        <input className='w-[700px] border-solid border-2 border-indigo-300 ... outline-none h-8 py-4 px-2 rounded-md my-1'
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Saurabh'
        value={dataForm.firstName}
        onChange={changeHandler}
        ></input>

        <br></br>

        <label htmlFor='lastName' className='font-bold'>Last Name</label>
        <br></br>
        <input className='w-[700px] border-solid border-2 border-indigo-300 ... outline-none h-8 py-4 px-2 rounded-md my-1'
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Yadav'
        value={dataForm.lastName}
        onChange={changeHandler}
        ></input>

        <br></br>

       <label htmlFor='emailAddress' className='font-bold'>Email Address</label>
        <br></br>
        <input className='w-[700px] border-solid border-2 border-indigo-300 ... outline-none h-8 py-4 px-2 rounded-md my-1'
        type='email'
        name='emailAddress'
        id='emailAddress'
        placeholder='sky@gmail.com'
        value={dataForm.emailAddress}
        onChange={changeHandler}
        ></input>

        <br></br>

        <label className='font-bold' htmlFor='countryName'>Country</label>
        <br></br>
        <select className='w-[700px] border-solid border-2 border-indigo-300 ... outline-none h-8 py-4 px-2 rounded-md my-1 text-blck'
        name='countryName'
        id='countryName'
        value={dataForm.countryName}
        onChange={changeHandler}
        >
          <option value="India" >India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
        </select>

        <br></br>

        <label htmlFor='streetAddress' className='font-bold'>Street address</label>
        <br></br>
        <input className='w-[700px] border-solid border-2 border-indigo-300 ... outline-none h-8 py-4 px-2 rounded-md my-1'
        type='text'
        name='streetAddress'
        id='streetAddress'
        placeholder='123 Rajgarh Colony'
        value={dataForm.streetAddress}
        onChange={changeHandler}
        ></input>

        <br></br>

        <label htmlFor='cityName' className='font-bold'>City</label>
        <br></br>
        <input className='w-[700px] border-solid border-2 border-indigo-300 ... outline-none h-8 py-4 px-2 rounded-md my-1'
        type='text'
        name='cityName'
        id='cityName'
        placeholder='Varanasi'
        value={dataForm.cityName}
        onChange={changeHandler}
        ></input>

        <br></br>

        <label htmlFor='stateName' className='font-bold'>State/Province</label>
        <br></br>
        <input className='w-[700px] border-solid border-2 border-indigo-300 ... outline-none h-8 py-4 px-2 rounded-md my-1'
        type='text'
        name='stateName'
        id='stateName'
        placeholder='Uttar Pradesh'
        value={dataForm.stateName}
        onChange={changeHandler}
        ></input>

        <br></br>

        <label htmlFor='postalCode' className='font-bold'>ZIP/Postal Code</label>
        <br></br>
        <input className='w-[700px] border-solid border-2 border-indigo-300 ... outline-none h-8 py-4 px-2 rounded-md my-1'
        type='text'
        name='postalCode'
        id='postalCode'
        placeholder='222175'
        value={dataForm.postalCode}
        onChange={changeHandler}
        ></input>

        <br></br>

        <fieldset className='mt-6'>
        <legend className='font-bold'>By Email</legend>
          <div className='flex gap-x-4'>
            <input
            type='checkbox'
            name='candidate'
            id='candidate'
            checked={dataForm.candidate}
            onChange={changeHandler}
            ></input>
            <div className='flex flex-col mt-5'>
              <label className='text-black  font-semibold' htmlFor='candidate'>Candidates</label>
              <p className='text-gray-600 '>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className='flex  gap-x-4'>
            <input
            type='checkbox'
            name='comments'
            id='comments'
            checked={dataForm.comments}
            onChange={changeHandler}
            ></input>
            <div className='flex flex-col mt-5'>
              <label className='text-black  font-semibold' htmlFor='comments'>Comments</label>
              <p className='text-gray-600 '>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className='flex  gap-x-4'>
            <input
            type='checkbox'
            name='offers'
            id='offers'
            checked={dataForm.offers}
            onChange={changeHandler}
            ></input>
            <div className='flex flex-col mt-5'>
              <label className='text-black  font-semibold ' htmlFor='offers'>Offers</label>
              <p className='text-gray-600 '>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>
        </fieldset>

        <br></br>

        <fieldset className='mt-6'>
          <legend className='font-bold '>Push notifications</legend>
          <p className='text-gray-800 mb-1'>These are delivered via SMS to your mobile phone </p>

          <input type='radio' name='pushNotification' id='pushEverything' value="everything" onChange={changeHandler} className='cursor-pointer'></input>
          <label htmlFor='pushEverything' className='mx-2 my-1'>Everything</label>
          <br></br>

          <input type='radio' name='pushNotification' id='pushEmail' value="Same as email" onChange={changeHandler} className='cursor-pointer'></input>
          <label htmlFor='pushEmail' className='mx-2 my-1'>Same as email</label>
          <br></br>

          <input type='radio' name='pushNotification' id='pushNothing' value="Nothing" onChange={changeHandler} className='cursor-pointer'></input>
          <label htmlFor='pushNothing' className='mx-2 my-1'>No push notifications</label>
        </fieldset>

        <input type='submit' value="Save" className='bg-blue-600 text-white px-4 py-2 rounded-md font-bold mt-6'></input>
      </form>
    </div>
  );
}

export default App;
