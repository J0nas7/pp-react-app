import { Link } from 'react-router-dom'
import { useState } from 'react'

export const PrivateLayout = ({ children }) => {
    const [myMenuActive, setMyMenuActive] = useState(false)
    const toggleMyMenu = () => {
        setMyMenuActive(!myMenuActive)
    }

    return (
        <div className="mainWrapper">
            <div className="topHeader">
                <Link to="/">
                    <img id="Logo" alt="PrivatePay logo" src={require('../Assets/Images/headerLogo.png')} />
                    <span id="Logotxt">PrivatePay</span>
                </Link>

                <div className="rightNav">
                    <span className="buttonWrapper">
                        <span className="buttonTxt">Opret ny</span>
                    </span>
                    <span className="buttonWrapper" onClick={toggleMyMenu}>
                        <span className="buttonTxt">Min menu</span>
                    </span>
                </div>

                <div className={'sideNav ' + (myMenuActive ? 'openNav' : '')}>
                    <div className="sideNavItem">
                        <span className="sideNavItemLink">Din profil</span>
                    </div>
                    <div className="sideNavItem">
                        <span className="sideNavItemLink">Dine ordrer</span>
                    </div>
                    <div className="sideNavItem">
                        <span className="sideNavItemLink">Favoritter</span>
                    </div>
                    <div className="sideNavItem">
                        <span className="sideNavItemLink">Kontakt kundeservice</span>
                    </div>
                    <div className="sideNavItem">
                        <span className="sideNavItemLink">Bruger guide</span>
                    </div>
                    <div className="sideNavItem">
                        <span className="sideNavItemLink">Om PrivatePay</span>
                    </div>
                    <div className="sideNavItem">
                        <span className="sideNavItemLink">Log ud</span>
                    </div>
                </div>
                <div className="clrBth"></div>
            </div>
            <div className="mainContents">
                { children }
                <div className="clrBth"></div>
            </div>
        </div>
    )
}