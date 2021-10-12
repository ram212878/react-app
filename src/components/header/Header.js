import React from 'react'

import './Header.css'

function Header() {
    let title = "React App"
    return (
        <div className="header-container">

            <div className="siteName">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Header
