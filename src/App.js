import Navbar from './components/Navbar';
import News from './components/News';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');
  const[Txt, ChngTxt]=useState('Enable Dark Mode')
  const ToggleMode = () => {
    if (Mode === 'light')
    {
      setMode('dark')
      document.body.style.background='#1e2c55'
      ChngTxt("Enable Light Mode")
    }
    else{
      setMode('light')
      document.body.style.background='white'
      ChngTxt('Enable Dark Mode')
  }}
  return (
    <div>
      <Navbar mode={Mode} Txt={Txt} ToggleMode={ToggleMode} />
    <BrowserRouter>
    <Routes>
      <Route exact path='/business' element={ <News key='business' category="business" mode={Mode}/>}/>
      <Route exact path='/entertainment' element={ <News key='entertainment' category="entertainment" mode={Mode}/>}/>
      <Route exact path='/sports' element={ <News key='sports' category="sports" mode={Mode}/>}/>
      <Route exact path='/health' element={ <News key='health' category="health" mode={Mode}/>}/>
      <Route exact path='/technology' element={ <News key='technology' category="technology" mode={Mode}/>}/>
      <Route exact path='/science' element={ <News key='science' category="science" mode={Mode}/>}/>
      <Route exact path='/' element={ <News  key='general' category="general" mode={Mode}/>}/>


    </Routes>
    </BrowserRouter>
    </div>

  )
}
export default App;
