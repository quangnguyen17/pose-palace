import { FC } from 'react'
import Image from 'next/image'

export const Description: FC<{
    
}> = () => {
    return (
        <div className="cell-content" style={{background: 'none'}}>
            <p className="text" style={{fontFamily: 'fantasy', fontSize: 30}}
            >POSE PALACE STUDIO
            </p>
            <p className="text" style={{fontSize: 20, fontFamily: 'serif', margin: 'auto'}}
            > Welcome to Pose Palace Studio in Orange County, California. 
            Our studio consists of two rooms: one features a cyclorama white wall, ideal for wide, full-body shots, while the other offers multiple color backdrops, perfect for more personal waist-up to head shot portraits. 
            An on-site attendant will guide you in either room, with a remote clicker to trigger the camera shutter, provide assistance in taking your first shot to familiarize yourself with the equipment, and finally, start the timer for your intended session. 
            Our equipment include: 1 Sony Full-Frame camera, a 32-inch monitor displaying the camera’s live view/feed, a 27-inch monitor displaying the last photo taken and 1-2 photography strobe lights depending on the room. 
            </p>
        </div>

    )
}
