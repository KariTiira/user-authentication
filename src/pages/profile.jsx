import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()

    const [userProfile, setUserProfile] = useState(null)

    useEffect ( () => {
        const token = localStorage.getItem("token")

        if (!token) {
            navigate("/login")
        }

        axios.get(
            "http://localhost:5050/profile", 
            {headers: {'Authorization': `Bearer ${token}`}
        }).then( (response) => {
            setUserProfile(response.data)
        }).catch( (error) => {
            console.log(error)
            if (error.status === 400 && error.response.data.message === "Invalid Token") {
                localStorage.clear()
                navigate("/login")
            } 
        })
    }, [] )

    if (!userProfile) {
        return (
            <>
                <h1>Ladataan käyttäjätiedot</h1>
            </>
        )
    } else {
        return (
            <>
            <h1>käyttäjätiedot</h1>
            <p><span>Etunimi: </span>{userProfile.etunimi}</p>
            <p><span>Sukunimi: </span>{userProfile.sukunimi}</p>
            <p><span>Sähköposti: </span>{userProfile.email}</p>
            </>
        )
    }

}

export default Profile