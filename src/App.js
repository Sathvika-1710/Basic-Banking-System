import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import {Transfer} from './components/Transfer';
import {Table} from './components/Table'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Transctions} from './components/Transctions'

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path='/'element={<Home/>}/>
          <Route exact path='/customers' element={<Table/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
          <Route path='/tranfe/:sname/:saccno' element={<Transfer/>}/>
          <Route path='/transctions' element={<Transctions/>}/>
         
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
