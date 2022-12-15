import Navbar from './Navbar'
import Home from './Home'
import { useState } from 'react';

// const [content, setContent] = useState(<Home/>)
//try it later

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
