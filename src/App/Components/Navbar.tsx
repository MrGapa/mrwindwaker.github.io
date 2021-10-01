import React from "react"

export const Navbar = () => {
    return (
        <nav>

            <div>
                <a href="/">MrWW</a>
            </div>

            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/games">Games</a>
                </li>
            </ul>
        </nav>
    )
}