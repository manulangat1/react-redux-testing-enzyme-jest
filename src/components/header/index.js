import React from 'react'
import './styles.scss'
import logo192 from '../../assets/graphics/logo192.png'
const Header = (props) => {
    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={logo192} alt="logo" />
                </div>
            </div>
        </header>
    )
}
export default Header