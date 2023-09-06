import { tuneService } from '../services/tune-service.js'
import { store } from './store.js';
import { SET_TUNES } from './tune.reducer.js';

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

