import logo from './logo.svg';
import './App.css';
import {Routes , Route } from 'react-router-dom';
import Read from './Components/Read';
import Create from './Components/Create';
import Edit from './Components/Edit';




function App() {
  return (
    <div className="container">

      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
       <Route exact path='/create' element={<Create/>}></Route>
       <Route exact path='/edit' element={<Edit/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
