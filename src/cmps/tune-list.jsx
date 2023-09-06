import { TunePreview } from "./tune-preview"


export function TuneList({tunes,currTune,setCurrTune}){
    return <ul className='tune-list'>
        {tunes.map(tune=>{
           return <TunePreview tune={tune} currTune={currTune} setCurrTune={setCurrTune} key={tune._id}/>
        })}
    </ul>
}