import React,{useState} from 'react';
import './Form.css';

const Form = () => {

    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        age:"",
        city:"",
        state:""
    });

    const [showData, setShowData] = useState(false);
   
    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowData(true);
        setFormData({
            firstname:"",
            lastname:"",
            age:"",
            city:"",
            state:""
        });
    }

    return (
        <div className='form'>
            <h1 className='register-head'>Register Here</h1>
            <div className='form-section'>
                <form onSubmit={handleSubmit}>
                    <div className='form-field'>
                        <label>FirstName</label>
                        <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} placeholder='Enter your first name' />
                    </div>
                    <div className='form-field'>
                        <label>LastName</label>
                        <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} placeholder='Enter your last name' />
                    </div>
                    <div className='form-field'>
                        <label>Age</label>
                        <input type="text" name="age" value={formData.age} onChange={handleInputChange} placeholder='Enter your age' />
                    </div>
                    <div className='form-field'>
                        <label>City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder='Enter your city'/>
                    </div>
                    <div className='form-field'>
                        <label>State</label>
                        <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder='Enter your state' />
                    </div>
                    <button type="submit" >Submit</button>
                    {!showData ? <div>
                    <p>{formData.firstname}</p>
                    <p>{formData.lastname}</p>
                    <p>{formData.age}</p>
                    <p>{formData.city}</p>
                    <p>{formData.state}</p>
                </div> : ""}
                </form>
                
            </div>
        </div>
    )
}

export default Form;