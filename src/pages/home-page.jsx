import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_ABOUT_NAV } from '../store/system.reducer';
import { Link } from 'react-scroll'
import { Bounce } from "react-reveal";

export function HomePage() {

    const goToAboutBtn = useRef(null)
    const dispatch = useDispatch()
    const isAboutNav = useSelector(storeState => storeState.systemModule.isAboutNav)

    useEffect(() => {
        if (isAboutNav) {
            goToAboutBtn.current.click()
            dispatch({ type: SET_IS_ABOUT_NAV, isAboutNav: false })
        }
    }, [])


    return <section className='home-page'>

        <section className='hero flex column align-center justify-center'>
            <Bounce left ><h1>FineTune</h1></Bounce>
            <Bounce right > <Link to='about' spy={true} smooth={true} offset={-100} duration={500}><button ref={goToAboutBtn}> <p>Learn more!</p> </button></Link></Bounce>
        </section>

        <Bounce bottom ><section className='about flex column align-center justify-center'  >
            <div className='about-prev flex  justify-center' id='about' >

                <div className='about-info'  >
                    <h3>Discover information</h3>
                    <p>Learn information about some of the greatest musicians of our time
                        about theirs work, thier songs and the years they were releasd at
                    </p>
                </div>
                <img src={`${require('../assets/img/about1.png')}`} />
            </div>

            <div className='about-prev flex  justify-center'>
                <img src={`${require('../assets/img/about2.png')}`} />
                <div className='about-info'>
                    <h3>Listen to music</h3>
                    <p>With fine tunes you can listen to clasic songs like
                        Crazy by Aerosmith,Billie Jean by Michael Jackson and more...
                    </p>
                </div>
            </div>

        </section></Bounce>
    </section >

}