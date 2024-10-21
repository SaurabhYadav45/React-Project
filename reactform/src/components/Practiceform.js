


const PracticeForm =() =>{
    
    const[formData, setFormData] = useState( {
        firstName: "",
        lastName: "",
        email: "",
        isAgree:true,
        mode: "",
        favCar:""
      });
    
      function changeHandler(event){
        const {name, value, checked, type } =event.target;
        setFormData((prevFormData) => {
          return{
            ...prevFormData,
            [name] : type === "checkbox" ? checked : value,
          };
        });
        console.log(formData);
      }
    
      function submitHandler(event){
          event.preventDefault();
          console.log("Submitting data");
          console.log(formData);
      }
    
    
      return (
        <div className="App text-2xl text-red-600">
           <form onSubmit={submitHandler}>
            <input type='text' 
            placeholder='Enter your firstname'
            name='firstName'
            value={formData.firstName}
            onChange={changeHandler}
            ></input>
    
            <br></br>
            <br></br>
    
            <input type='text' 
            placeholder='Enter your lastName'
            name='lastName'
            value={formData.lastName}
            onChange={changeHandler}
            ></input>
    
            <br></br>
            <br></br>
    
            <input type='email'
            placeholder='Enter your Email'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            >
            </input>
    
            <br></br>
            <br></br>
    
            <textarea className='border-solid border-1 border-gray-600 ...'
            rows={5}
            cols={24}
            id='textArea'
            name='textArea'
            value={formData.textArea}
            placeholder='Comments here'
            onChange={changeHandler}
            ></textarea>
    
            <br></br>
    
            <input
            type='checkbox'
            name='isAgree'
            checked ={formData.isAgree}
            onChange={changeHandler}
            ></input>
    
            <br></br>
            <fieldset>
    
            <input
            type='radio'
            name='mode'
            value="Dark-mode"
            checked= {formData.mode === "Dark-mode"}
            onChange={changeHandler}
            ></input>
            <label htmlFor="Dark-mode">Dark Mode</label>
    
            <input
            type='radio'
            name='mode'
            value="Light-mode"
            checked={formData.mode === "Light-mode"}
            onChange={changeHandler}
            ></input>
            <label htmlFor="Light-mode">Light Mode</label>
            </fieldset>
    
            <br></br>
    
            
            <select className='text-lg'
            name='favCar'
            id='favCar'
            value={formData.favCar}
            onChange={changeHandler}
            >
              <option value="Scorpio">Scorpio</option>
              <option value="fortuner">Fortuner</option>
              <option value="Thaarr">Thaarr</option>
              <option value="Defender">Defender</option>
              <option value="BMW">BMW</option>
            </select>
            <label htmlFor='favCar' className='text-black mx-10'>Choose your favourite Car</label>
            
            <br></br>
            <br></br>
    
            <input type='submit' value="submit"></input>
    
           </form>
        </div>
      );
    }
    