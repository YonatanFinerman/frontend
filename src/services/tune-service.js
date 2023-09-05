
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import axios from 'axios'

const STORAGE_KEY = 'tune'

export const tuneService = {
    query,
    getById,
    save,
    remove,
    getEmptyLocation,
    addTuneMsg,
    getLocationName,
    getDistanceFromUser,
    getEmptyFilter,
    getLocationByName,
    getUserTunes,
    getFinishedTunes,
}
window.cs = tuneService

_createTunes()

async function query(filterBy, userLoc = null) {
    console.log(filterBy, 'filterby')
    let tunes = await storageService.query(STORAGE_KEY)

    if (filterBy.isTune) {
        tunes = tunes.filter(tune => tune.users.length > 0)

    }
    else {
        tunes = tunes.filter(tune => !tune.users.length)

    }

    if (filterBy.date) {
        tunes = tunes.filter(tune => {
            let date = new Date(tune.time)
            date.setHours(0, 0, 0, 0)
            if (date.getTime() === filterBy.date) {
                return tune
            }
        })
    }

    if (filterBy.capacity) {
        tunes = tunes.filter(tune => tune.capacity <= filterBy.capacity)

    }
    if (isNaN(filterBy.maxDistance) && userLoc) {
        tunes = tunes.filter(tune => {
            return getDistanceFromUser(userLoc, tune.loc) <= filterBy.maxDistance
        })

    }
    if (filterBy.locName) {
        const regex = new RegExp(filterBy.locName, 'i')
        tunes = tunes.filter(tune => regex.test(tune.locName))
    }


    return tunes
}

async function getUserTunes(hashedUserID) {
    let tunes = await storageService.query(STORAGE_KEY)
    return tunes.reduce((acc, tune) => {
        const currUserIdx = tune.users.findIndex(user => user._id === hashedUserID)
        if (currUserIdx >= 0) acc.push(tune)
        return acc
    }, [])
}

async function getFinishedTunes() {
    let tunes = await storageService.query(STORAGE_KEY)
    return tunes.filter(tune => tune.imgsAfter.length)
}




async function getLocationName(pos) {
    console.log('locname from args', pos)
    // const API_KEY = 'AIzaSyDaRU8dfDmfYH7VAnKLLM7Y2SXli9AH33Q'
    const API_KEY = 'AIzaSyCWNRrGApZar-RMJ5hDCH8zRLA2TDISlPc'

    // latlng by name
    let urk = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${API_KEY}`
    // name by laglng
    let urlName = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=AIzaSyCWNRrGApZar-RMJ5hDCH8zRLA2TDISlPc`
    // console.log('name of location is', posNamePrm)
    const locName = await axios.get(urlName).then(res => res.data.results[0].formatted_address)
    console.log('this is location', locName)
    return locName
}

async function getLocationByName(locName) {

    const API_KEY = 'AIzaSyCWNRrGApZar-RMJ5hDCH8zRLA2TDISlPc'
    let urlName = `https://maps.googleapis.com/maps/api/geocode/json?address=${locName}&key=${API_KEY}`
    try {
        const loc = await axios.get(urlName).then(res => res.data.results)

        return loc
    }
    catch (err) {
        console.log(err, 'No such place')
        throw err
    }
}

function getDistanceFromUser(userLoc, tuneLoc) {

    const R = 6371
    const dLat = utilService.deg2rad(tuneLoc.lat - userLoc.lat)

    const dLng = utilService.deg2rad(tuneLoc.lng - userLoc.lng)
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(utilService.deg2rad(userLoc.lat)) *
        Math.cos(utilService.deg2rad(tuneLoc.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c
    return distance.toFixed(1)
}

async function getById(tuneId) {
    return storageService.get(STORAGE_KEY, tuneId)
}

async function remove(tuneId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, tuneId)
}

async function save(tune) {

    var savedTune
    if (tune._id) {
        savedTune = await storageService.put(STORAGE_KEY, tune)
    } else {
        // Later, owner is set by the backend

        // tune.owner = userService.getLoggedinUser()
        savedTune = await storageService.post(STORAGE_KEY, tune)
    }
    return savedTune
}

async function addTuneMsg(tuneId, txt) {
    // Later, this is all done by the backend
    const tune = await getById(tuneId)
    if (!tune.msgs) tune.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    tune.msgs.push(msg)
    await storageService.put(STORAGE_KEY, tune)

    return msg
}

function getEmptyLocation() {
    return {
        _id: '',
        imgsBefore: [],
        imgsAfter: [],
        users: [],
        info: '',
        loc: null,
        time: '',
        status: '',
        locName: '',
        capacity: 8,
    }
}

function getEmptyFilter() {
    return { maxDistance: '100', capacity: 13, locName: '', isTune: false, date: 0 }
}

function _createTune() {
    var t1 = new Date().toLocaleString()
    const randomLocs = [{ lat: 31.801447, lng: 34.643497 }, { lat: 32.794044, lng: 34.98957 }, { lat: 32.015833, lng: 34.787384 }]
    const isTune = (Math.random() > 0.5) ? true : false


    const tune = {
        _id: utilService.makeId(),
        imgsBefore: [
            'https://i0.wp.com/wallpaperaccess.com/full/393735.jpg',
            'https://m.media-amazon.com/images/I/81VBi2RDh6L._SL500_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKa_rfXhm0SzPCi8oeofTBZudR6XMViSsK6Q&usqp=CAU'
        ],
        imgsAfter: [],
        users: [],
        info: utilService.makeLorem(utilService.getRandomIntInclusive(30, 60)),
        loc: randomLocs[utilService.getRandomIntInclusive(0, 2)],
        time: '',
        status: 'informed',
        locName: utilService.makeLorem(2),
        capacity: 8,
    }

    // getLocationName(tune.location).then(loc => tune.locName = loc.data.results[1].formatted_address)
    //  getLocationName(tune.location)
    if (isTune) {
        tune.users = [{ fullName: 'moti pipi', profileImg: 'https://clb.ac.il/wp-content/uploads/2017/03/MOSHE-COHEN-ELIYA-1.jpg', _id: utilService.makeId() }
            , { fullName: 'moti pipi', profileImg: 'https://clb.ac.il/wp-content/uploads/2017/03/MOSHE-COHEN-ELIYA-1.jpg', _id: utilService.makeId() },
        { fullName: 'moti pipi', profileImg: 'https://clb.ac.il/wp-content/uploads/2017/03/MOSHE-COHEN-ELIYA-1.jpg', _id: utilService.makeId() },
        { fullName: 'moti pipi', profileImg: 'https://clb.ac.il/wp-content/uploads/2017/03/MOSHE-COHEN-ELIYA-1.jpg', _id: utilService.makeId() },
        { fullName: 'moti pipi', profileImg: 'https://clb.ac.il/wp-content/uploads/2017/03/MOSHE-COHEN-ELIYA-1.jpg', _id: utilService.makeId() },]
        tune.time = Date.now() + utilService.getRandomIntInclusive(0, 31536000000)
        tune.status = 'starting soon'
    }

    return tune
}

function _createTunes() {
    let tunes = utilService.loadFromStorage(STORAGE_KEY)
    if (!tunes || !tunes.length) {
        tunes = []
        for (let i = 0; i < 50; i++) {
            tunes.push(_createTune())
        }

        utilService.saveToStorage(STORAGE_KEY, tunes)
    }
    return tunes
}



// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))



