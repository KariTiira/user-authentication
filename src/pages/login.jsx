import React from 'react'
import axios from 'axios'

const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        axios.post("http://localhost:5050/login", {"email": "miisuli", "password": "salasana123"}).then( (response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <form onSubmit= {onSubmit} >
            <label htmlFor="email">Sähköposti</label>
            <input name="email" id="email"/> 
            <label htmlFor="password">Salasana</label>
            <input name="password" id="password"/> 
            <input type="submit" />
        </form>
    )
}

export default Login