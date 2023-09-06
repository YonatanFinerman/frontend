import { GrFormClose } from "react-icons/gr";

export function TunePreview({ tune, setCurrTune, currTune }) {
    return <article className={`tune-preview flex align-center ${(currTune?._id === tune?._id) ? 'selected' : ''}`}
        onClick={() => setCurrTune(tune)}>
        <img src={tune.imgUrl} />
        <div className='tune-info'>
            <h4>{tune.songName}</h4>
            <div className='band-year-cont flex '>

                <p>{tune.band}</p>
                <p className='year'>{tune.year}</p>
            </div>


        </div>
        {(currTune?._id === tune?._id) && <button onClick={(ev)=>{
            ev.stopPropagation()
            setCurrTune(null)
        }} className='close-modal-btn'><GrFormClose /></button>}
    </article>
}