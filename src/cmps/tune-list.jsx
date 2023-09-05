import { TunePreview } from "./tune-preview"

export function TuneList({tunes}){
    console.log('tunes',tunes)
    return <ul className='tune-list'>
        {tunes.map(tune=>{
           return <TunePreview tune={tune} key={tune._id}/>
        })}
    </ul>
}