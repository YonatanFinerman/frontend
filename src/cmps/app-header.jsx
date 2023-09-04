import { Link, NavLink } from 'react-router-dom'

export function AppHeader() {

    return (
        <header className="app-header flex align-center space-between">
            <img className='logo' src={`${require('../assets/img/logo.png')}`}  />
            <nav>
                <p>About</p>
                <button>Start now!</button>
            </nav>
           
        </header>
    )
}