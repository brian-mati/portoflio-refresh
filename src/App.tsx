
import './App.css'
import './index.css'
import Sidebar from './sidebar.tsx'
function App() {
  

  return (
    <>
      <main>
        <Sidebar/>
        <section className='max-w-md leading-7'>
          <p> Hello there and welcome to my small corner
of the inter webs where i share my experiences,
code and designs.  
<span className='inline-block mt-8'>
I started my journey into to programming and
computer science in general 2023.  I am purely
self taught and all the skills acquired have been 
through grueling ours of building applications 
to entertain and test myself. <span className='inline-block mr-4 underline'>Read more</span>
 </span>
 </p>
        </section>
      </main>
       </>
  )
}

export default App
