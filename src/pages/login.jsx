import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:5050/login", {"email": formData.get('email'), "password": formData.get('password')}).then( (response) => {
            console.log(response)
            const token = response.data.token

            localStorage.setItem("token", token)
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <form onSubmit= {onSubmit} >

            <div className='input-box'>
                <label 
                    htmlFor="email"
                    className='label-name'>
                        Sähköposti</label>
                <input 
                    name="email" 
                    id="email"
                    type='email'
                    required/> 
            </div>

            <div className='input-box'>
                <label 
                    htmlFor="password"
                    className='label-name'>
                        Salasana</label>
                <input 
                    name="password" 
                    id="password"
                    type='password'
                    required/> 
            </div>
            <input 
                type="submit"
                className='submit-btn'
                value="Kirjaudu"/>
        </form>
    )
}

export default Login