import React from 'react'
import './Login.css'
import Avatar from './top_stories.png'

const Login = () => {
    return (
        <div>
            <div className="card">
                <button className="skip-btn" type="button">Skip</button>

                <div className="inner-card">
                    <div className="avatar-image">
                        <img src={Avatar} alt="avatar"/>
                    </div>
                    <form method="GET" action="" >
                        <input type="text" placeholder="Enter user name"/>
                        <input type = "password" placeholder="Enter password"/>
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>


                </div>
            </div>

        </div>
    )
}

export default Login
