import { useEffect, useRef,useState } from 'react'
import { Player } from '@lordicon/react'
// import { IconComponents } from './components/icons'

import home from './assets/home.json'
import about from './assets/about.json'
import resume from './assets/resume.json'
import schedule from './assets/schedule.json'

function Home() {
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

function About() {
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
                icon={about}
             
            />
        </div>
     
    )
}

function Resume() {
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
                
                icon={resume}
            />
        </div>
       
    )
}

function Schedule() {
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
                icon={schedule}
            />
        </div>
    )
}

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <ul className="">
                <li>
                    <Home />
                </li>
                <li>
                    <About />
                </li>
                <li>
                    <Resume />
                </li>
                <li>
                    <Schedule />
                </li>
            </ul>
        </nav>
    )
}
