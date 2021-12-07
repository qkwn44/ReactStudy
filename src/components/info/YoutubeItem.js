import React from  'react';

const YoutubeItem = (props) => {
// console.log(props);

    return (
        <div className="site">
            <a href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`} target="_blank" rel="noreferrer">
                <img src={props.video.snippet.thumbnails.high.url} alt={props.video.snippet.title} />
                <h2 className="title">{props.video.snippet.title}</h2>
                <span className="chanel">{props.video.snippet.channelTitle}</span>
                <p className="desc">{props.video.snippet.description}</p>
            </a>
        </div>
    )
}


export default YoutubeItem;