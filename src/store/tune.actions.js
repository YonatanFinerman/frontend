import { tuneService } from '../services/tune-service.js'
// import { userService } from '../../services/user.service.js';
import { store } from './store.js';
import { SET_TUNES } from './tune.reducer.js';
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
// import { ADD_TUNE, SET_TUNES, UPDATE_TUNE } from '../reducers/tune.reducer.js'
// import { SET_SCORE } from "./user.reducer.js";

export async function loadTunes() {
    try {
        const tunes = await tuneService.query()
        store.dispatch({
            type: SET_TUNES,
            tunes
        })
        return tunes

    } catch (err) {
        console.log('Cannot load tunes', err)
        throw err
    }

}

// Action Creators:
// export function getActionRemoveTune(tuneId) {
//     return {
//         type: REMOVE_TUNE,
//         tuneId
//     }
// }

// export function getActionAddTune(tune) {
//     return {
//         type: ADD_TUNE,
//         tune
//     }
// }

// export function getActionUpdateTune(tune) {
//     return {
//         type: UPDATE_TUNE,
//         tune
//     }
// }

// export async function addTune(tune) {
//     try {
//         const savedTune = await tuneService.save(tune)
//         console.log('Added Tune', savedTune)
//         store.dispatch(getActionAddTune(savedTune))
//         return savedTune
//     } catch (err) {
//         console.log('Cannot add tune', err)
//         throw err
//     }
// }



// export async function loadFinishedTunes() {
//     try {
//         const tunes = await tuneService.getFinishedTunes()
//         store.dispatch({
//             type: SET_TUNES,
//             tunes
//         })
//         console.log(tunes,'finished')

//     } catch (err) {
//         console.log('Cannot load tunes', err)
//         throw err
//     }
// }

// export async function updateTune(tune) {
//     try {
//         const savedTune = await tuneService.save(tune)
//         store.dispatch(getActionUpdateTune(savedTune))
//         return savedTune
//     }
//     catch (err) {
//         console.log('Cannot save tune', err)
//         throw err
//     }
    // return tuneService.save(tune)
    //     .then(savedTune => {
    //         console.log('Updated Tune:', savedTune)
    //         store.dispatch(getActionUpdateTune(savedTune))
    //         return savedTune
    //     })
    //     .catch(err => {
    //         console.log('Cannot save tune', err)
    //         throw err
    //     })
// }

// export async function removeTune(tuneId) {
//     try {
//         await tuneService.remove(tuneId)
//         store.dispatch(getActionRemoveTune(tuneId))
//     } catch (err) {
//         console.log('Cannot remove tune', err)
//         throw err
//     }
// }





// export function addToTunet(tune) {
//     store.dispatch({
//         type: ADD_TO_TUNET,
//         tune
//     })
// }

// export function removeFromTunet(tuneId) {
//     store.dispatch({
//         type: REMOVE_FROM_TUNET,
//         tuneId
//     })
// }

// export async function checkout(total) {
//     try {
//         const score = await userService.changeScore(-total)
//         store.dispatch({ type: SET_SCORE, score })
//         store.dispatch({ type: CLEAR_TUNET })
//         return score
//     } catch (err) {
//         console.log('TuneActions: err in checkout', err)
//         throw err
//     }
// }


// // Demo for Optimistic Mutation
// // (IOW - Assuming the server call will work, so updating the UI first)
// export function onRemoveTuneOptimistic(tuneId) {
//     store.dispatch({
//         type: REMOVE_TUNE,
//         tuneId
//     })
//     showSuccessMsg('Tune removed')

//     tuneService.remove(tuneId)
//         .then(() => {
//             console.log('Server Reported - Deleted Succesfully');
//         })
//         .catch(err => {
//             showErrorMsg('Cannot remove tune')
//             console.log('Cannot load tunes', err)
//             store.dispatch({
//                 type: UNDO_REMOVE_TUNE,
//             })
//         })
// }
