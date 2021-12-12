import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    // console.log(props.videos)
    //props.videos >=> destructred videos out

    // Mapping Over Videos and return Single videoItem at a time 
    const renderedList = videos.map((video) => {
        return (
            <div>

                {/* // Making a prop with the video we got from MAPing */}
               <VideoItem 
               key = {video.id.videoId}
               onVideoSelect={onVideoSelect} 
               video ={video}
               />
 
            </div>
        )
    })

    return(
        <div className="ui relaxed divided list">
            {renderedList}
            {/* {props.videos.length} */}
        </div>
    )
}

export default VideoList;