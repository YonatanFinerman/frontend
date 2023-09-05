import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { Fade } from "react-reveal";
import { useDispatch } from 'react-redux';
import { SET_IS_ABOUT_NAV } from '../store/system.reducer';

export function AppHeader() {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return <header className='app-header flex align-center space-between' style={{ background: `${(location.pathname === '/') ? 'none' : '#FFAA00'}` }}>
        <Fade left ><div onClick={() => navigate('/')}><img className='logo' src={(location.pathname !== '/') ? `${require('../assets/img/logo.png')}` : `${require('../assets/img/logo-home.png')}`} /></div></Fade>
        <Fade right > <nav className='flex align-center'>
            <Link to='about' spy={true} smooth={true} offset={-100} duration={500}><p onClick={() => {
                navigate('/')
                dispatch({ type: SET_IS_ABOUT_NAV, isAboutNav: true })

            }}>About</p></Link>
            {(location.pathname === '/') ? <button className='start-btn' onClick={() => { navigate('/tune') }}>Start now!</button>
                :
                <NavLink to={'/'}>Home</NavLink>}
        </nav></Fade>

    </header>

}