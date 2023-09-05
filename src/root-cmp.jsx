import React from 'react'
import { Routes, Route } from 'react-router'
import { tuneService } from './services/tune-service'
import { AppHeader } from './cmps/app-header'
// import { AppFooter } from './cmps/app-footer'

import { HomePage } from './pages/home-page'
import { TuneIndex } from './pages/tune-index'

export function RootCmp() {

    return (
        <div>
            <AppHeader />
            <main className='main-layout'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tune" element={<TuneIndex />} />
                    
                </Routes>
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


