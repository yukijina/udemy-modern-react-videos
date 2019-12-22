import React from 'react';
import VideoItem from './VideoItem';

//insted of passing 'props' we can add objet {videos}
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />
    })
    
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList