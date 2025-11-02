import { useEffect, useRef,useState } from 'react'
import { Player } from '@lordicon/react'
import home from '../../assets/home.json'

 function HomeIcon() {
     const [isHovered, setIsHovered] = useState<boolean>(false)
    const playerRef = useRef<Player>(null)

    useEffect(() => {
        playerRef.current?.playFromBeginning()
    }, [])
     useEffect(() => {
        if (isHovered) {
            playerRef.current?.playFromBeginning()
        } else {
            playerRef.current?.pause()
        }
    }, [isHovered])
    return (
         <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Player
                ref={playerRef}
                icon={home}
             
            />
        </div>
       
    )
}

export default HomeIcon