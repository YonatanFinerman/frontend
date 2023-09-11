import { useEffect, useState } from "react"
import { loadTunes } from "../store/tune.actions"
import { useSelector } from "react-redux"
import { TuneList } from "../cmps/tune-list"

export function TuneIndex(){

    const tunes = useSelector(storeState => storeState.tuneModule.tunes)
  const [currTune,setCurrTune] = useState(null)

    useEffect(()=>{
        loadTunes() 
    },[])
    console.log(currTune)


    return <section className='tune-index'>
      
      <h2> The finest tunes</h2>
      
      { <TuneList tunes={tunes} currTune={currTune} setCurrTune={setCurrTune}/>}
    
    </section>
}