import React, {useState} from 'react';
import './Form.css';

const Form = () =>{

    const [formData, setFormData] = useState({
        name:"",
        email:"",
    });

    const [errors, setErrors] = useState({
        name:"",
        email:""
    })

    const handleInput =(e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        setErrors({
            ...errors,
            [name]:''
        })
    }

    const validateForm = () =>{
        let valid = true;
        if(formData.name.trim()=== ''){
            setErrors((prevErrors)=>({
                ...prevErrors,
                name:"Name is required"
            }))
            valid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formData.email.trim())){
            setErrors((prevErrors)=>({
                    ...prevErrors,
                    email:"Invalid email format"
            
            }))
            valid = false;
        }
        return valid;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateForm()){
            console.log("Form submitted successfully", formData);
        }
        setFormData({
            name:"",
            email:""
        });
    }



    return(
        <div className='form-section'>
            <h1>Register Here</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label>Name</label>
                    <input type='text' name="name" value={formData.name} onChange={handleInput} placeholder='Enter your name'/>
                    <span className='error'>{errors.name}</span>
                </div>
                <div className='form-field'> 
                    <label>Email</label>
                    <input type='email' name="email" value={formData.email} onChange={handleInput} placeholder='Enter your email'/>
                    <span className='error'>{errors.email}</span>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;