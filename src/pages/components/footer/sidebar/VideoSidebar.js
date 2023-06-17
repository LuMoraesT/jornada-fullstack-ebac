import React, { useState } from 'react'
import './videoSidebar.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function VideoSidebar() {

    const [liked, setLiked] = useState(false)

    function handdleLike() {
        setLiked(!liked)
    }

  return (
    <div className='videoSidebar'>
        <div 
            className='videoSidebar__options'
            onClick={handdleLike}
            >
                {liked ? <FavoriteOutlinedIcon fontSize='large' /> : <FavoriteBorderOutlinedIcon fontSize='large'/>}    
            
            <p>{ liked ? 300 + 1 : 300 }</p>
        </div>
        <div className='videoSidebar__options'>
            <ChatOutlinedIcon fontSize='large'/>
            <p>200</p>
        </div>
        <div className='videoSidebar__options'>
            <ShareOutlinedIcon fontSize='large'/>
            <p>100</p>
        </div>
    </div>
  )
}

export default VideoSidebar