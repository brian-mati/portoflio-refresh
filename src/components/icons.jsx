import { useEffect, useRef,useState } from 'react'
import { Player } from '@lordicon/react'


export function IconComponents(icon) {
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
                icon={icon}
            />
        </div>
    )
}