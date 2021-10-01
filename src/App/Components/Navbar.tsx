import React from "react"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>

            <div>
                <Link to="/">MrWW</Link>
            </div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/games">Games</Link>
                </li>
            </ul>
        </nav>
    )
}