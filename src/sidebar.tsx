import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

import home from './assets/home.json';
import about from './assets/about.json';
import resume from './assets/resume.json';
import schedule from './assets/schedule.json';



function Home(){
  const playerRef = useRef<Player>(null);


  useEffect( () => {
    playerRef.current?.playFromBeginning()
  } , [])
  return(
   
       <Player
    ref={playerRef}
    icon={home}
    onComplete={ () => 
        playerRef.current?.pause()
    }
    />
   
   
  )
}

function About(){
  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning()
  },[])
  return(
    <Player
    ref={playerRef}
    icon={about}
    onComplete={() => playerRef.current?.pause()}
    />
  )
}

function Resume(){
  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning()
  },[])
  return(
    <Player
    ref={playerRef}
    icon={resume}
    onComplete={() => playerRef.current?.pause()}
    />
  )
}

function Schedule(){

  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning()
  },[])
  return(
    <Player
    ref={playerRef}
    icon={schedule}
    onComplete={() => {
      
      playerRef.current?.pause()}}
    />
  )
}


export default function Sidebar() {
  return (
    <nav className='sidebar'>
      <ul className=''>
        <li>
          <Home/>
</li>
        <li><About/></li>
        <li><Resume/></li>
        <li><Schedule/></li>
      </ul>
    </nav>
  );
}

