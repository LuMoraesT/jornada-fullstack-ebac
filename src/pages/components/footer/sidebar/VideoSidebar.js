import React, { useState } from 'react'
import './videoSidebar.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function VideoSidebar({likes, messages, shares}) {

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
            
            <p>{ liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar__options'>
            <ChatOutlinedIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className='videoSidebar__options'>
            <ShareOutlinedIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar