export function TunePreview({tune}){
    return <article className='tune-preview flex align-center'>
        <img src={tune.imgUrl}/>
        <div className='tune-info'>
        <h4>{tune.songName}</h4>
        <p>{tune.band}</p>
        <p className='year'>{tune.year}</p>
        </div>
       
    </article>
}