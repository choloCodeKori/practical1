// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes }
    from 'react-router-dom';
import './App.css';
import Create from './components/create';
// import Edit from './components/Edit';
import Home from './components/home';

function App() {
  return (
    <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' 
                        element={<Home />} />
                    <Route path='/create' 
                        element={<Create />} />
                    
                </Routes>
            </Router>
        </div>
  );
}

export default App;
