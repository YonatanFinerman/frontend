import { Link, NavLink, useLocation } from 'react-router-dom'

export function AppHeader() {

    const location = useLocation()

    return (
        <header className="app-header flex align-center space-between" style={{background:`${(location.pathname === '/')?'none':'red'}`}}>
            <img className='logo' src={`${require('../assets/img/logo.png')}`}  />
            <nav>
                <p>About</p>
                <button>Start now!</button>
            </nav>
           
        </header>
    )
}