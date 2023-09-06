
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

import axios from 'axios'

const STORAGE_KEY = 'tune'

export const tuneService = {
    query,
}
window.cs = tuneService

_createTunes()

async function query() {
    let tunes = await storageService.query(STORAGE_KEY)
    return tunes
}

function _createTune() {

    const tune = {
        _id:utilService.makeId(),
        songName:'crazy',
        band:'aerosmith',
        year:1999,
        imgUrl:'https://i.ytimg.com/vi/qfNmyxV2Ncw/maxresdefault.jpg'
    }

    return tune
}

function _createTunes() {
    let tunes = utilService.loadFromStorage(STORAGE_KEY)
    if (!tunes || !tunes.length) {
        tunes = []
        for (let i = 0; i < 10; i++) {
            tunes.push(_createTune())
        }

        utilService.saveToStorage(STORAGE_KEY, tunes)
    }
    return tunes
}



// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




