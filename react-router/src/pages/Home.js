import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

const Home = () => {
    const [ name, setName ] = useState('')

    const handleName = event => {
        setName(event.target.value)
    }

    const history = useHistory()

    const HandleGetName = () => {
        history.push(`/get-name/${ name }`)
    }

    const handleSubmit = event => {
        HandleGetName()
        event.preventDefault()
    }

    return(
        <div>
            <h1>Mari belajar routing</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/welcome">Welcome</Link>
                </li>
            </ul>
            <form onSubmit= { handleSubmit }>
                <input value= { name } onChange= { handleName }/>
                <button type= 'submit' >Get Name in Route</button>
            </form>
        </div>
    )
}

export default Home