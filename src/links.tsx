import { useEffect, useRef, useState } from "react";
import { Player } from '@lordicon/react';
import email from './assets/email.json';


function Email(){
    const [isHovered,setIsHovered] = useState(false)
    const playRef = useRef<Player>(null);
    useEffect( () => {
        playRef.current?.playFromBeginning()
    } ,[] )

    return(
        <button className="inline">

        </button>
    )
}

export default function Links(){
  
    return(
        <ul className="links">
            <li></li>
        </ul>
    )
}