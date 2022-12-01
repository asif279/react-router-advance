
import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,Switch,Route, Routes,} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './NotMatch/NotMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {
 
  return (
  
  
  <Router>


<Routes>


  

 <Route path="/home" element={<Home/>} />
 <Route path="/" element={<Home/>} />
 <Route path='/friend/:friendId' element={<FriendDetail/>}/>

 <Route path="*" element={<NotMatch/>}/>
</Routes>


  </Router>
   
  );
 
}

export default App;
