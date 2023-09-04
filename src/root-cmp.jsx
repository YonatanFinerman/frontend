import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/app-header'
// import { AppFooter } from './cmps/app-footer'

import { HomePage } from './pages/home-page'

export function RootCmp() {

    return (
        <div>
            <AppHeader />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    
                </Routes>
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


