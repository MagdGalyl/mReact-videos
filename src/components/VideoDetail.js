import React from 'react';

const VideoDetail = ({video})=> {
    if (!video) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className='ui embed'>
                <iframe title="Video Player" src={videoSrc} />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}


// <iframe width="560" height="315" src="https://www.youtube.com/embed/zXecSGtwmRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


export default VideoDetail;