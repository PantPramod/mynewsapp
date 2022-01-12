import React, { useState } from 'react'
import './Header.css';
const Header = ({ passValue }) => {
    const [showMenu, setMenu] = useState(false);
    const openMenu = () => {
        setMenu(!showMenu);
    }

    return (
        <div>
            <nav className='header'>
                <p onClick={() => passValue('home')}>Home</p>
                {/* <p onClick={() => passValue('Categories')}>Categories</p> */}
                <p onClick={() => passValue('headlines')}>Headlines</p>
            </nav>

            <div className='menu'>
                <p onClick={openMenu}>Menu</p>
            </div>

            <nav style={showMenu ? { transform: "translateX(0%)" } : {}} className='responsiveHeader'>
                <p onClick={() => { setMenu(false); passValue('home') }}>Home</p>
                {/* <p onClick={() => { setMenu(false); passValue('Categories') }}>Categories</p> */}
                <p onClick={() => { setMenu(false); passValue('headlines') }}>Headlines</p>
            </nav>
        </div>
    )
}

export default Header
