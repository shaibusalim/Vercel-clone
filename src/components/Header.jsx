import React from 'react'
import "../styles/Header.css";
import { FiTriangle } from "react-icons/fi";

function Header() {
  return (
    <div className='header-container'>
        <div className='header-content'>
                <div className='header-menu'>
                        <div className='header-title'>
                             <FiTriangle size={24} style={{fill: 'white'}}/>
                             <span>Vercel</span>
                        </div>
                        <div className='header-menu-list'>
                            <ul>
                                <li>Products</li>
                                <li>Solutions</li>
                                <li>Resources</li>
                                <li>Enterprise</li>
                                <li>Docs</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                </div>
                <div className='header-buttons'>
                        <button>Log In</button>
                        <button>Contact</button>
                        <button>Sign Up</button>
                </div>
        </div>

    </div>
  )
}

export default Header