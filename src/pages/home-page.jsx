import React from 'react'

import { Link } from 'react-scroll'

export function HomePage() {

    return (
        <section className='home-page'>

            <section className='hero main-layout'>
                <div className='text-center'>

                <h1>FineTune</h1>

                <Link to='about' spy={true} smooth={true} offset={0} duration={500}><button > <p>Learn more!</p> </button></Link>
                </div>
            </section>

            <section className='about' id='about'>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti quis odit incidunt ut minima porro accusamus odio blanditiis tenetur iure inventore perspiciatis architecto doloremque facilis, laudantium aliquam fugit. Deleniti!</p>
            </section>

        </section >
    )
}