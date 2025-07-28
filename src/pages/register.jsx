import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        const formData = new FormData(e.target)

        axios.post("http://localhost:5050/register", {"etunimi": formData.get('etunimi'), "sukunimi": formData.get('sukunimi'), "email": formData.get('email'), "password": formData.get('password')}).then( (response) => {
            console.log(response)
            navigate("/login")
        })
    }

    return (
        <form 
        onSubmit= {onSubmit} >

            <div className='input-box'>
                <label 
                htmlFor="etunimi"
                className='label-name'>
                    Etunimi
                </label>
                <input 
                    name="etunimi" 
                    id="etunimi"
                    type='text'
                    required/> 
            </div>

            <div className='input-box'>
                <label 
                    htmlFor="sukunimi"
                    className='label-name'>
                    Sukunimi
                </label>
                <input 
                    name="sukunimi" 
                    id="sukunimi"
                    type='text'
                    required/> 
            </div>

            <div className='input-box'>
                <label 
                    htmlFor="email"
                    className='label-name'>
                        Sähköposti
                </label>
                <input 
                    name="email" 
                    id="email"
                    type='email'
                    required /> 
            </div>

            <div className='input-box'>
                <label 
                    htmlFor="password"
                    className='label-name'>
                        Salasana
                </label>
                <input 
                    name="password" 
                    id="password"
                    type='password'
                    required/> 
            </div>

            <input 
                type="submit"
                className='submit-btn'
                value="Rekisteröidy" />
        </form>
        
    )
}

export default Register