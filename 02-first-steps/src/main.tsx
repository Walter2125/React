import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
import { MyAwesomeApp } from './MyAwesomeApp'
createRoot(document.getElementById('root')!).render( //solo se reguesa un elemento en este caso es StrictMode y todo lo qu esta dentro es hijo
  <StrictMode> 
   <FirstStepsApp/>

  {/* <MyAwesomeApp/> */}
  </StrictMode>,
)
