import './App.css';
import Header from "./sections/Header/Header";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Post from "./pages/Post/Post";
import Paper from "./pages/Paper/Paper";
import React, {useState} from "react";

function App({data}) {
   const [langSelect, setLangSelect] = useState('eu');
   const [changeLocal, setChangeLocal] = useState(data.eu);
   const selectLanguage = (select) => {
      setLangSelect(select)
      setChangeLocal(data[select])
   }
   
   const [IDCard, setIDCard] = useState('');
   return (
     <>
    <Header
       data={changeLocal}
       onChange={selectLanguage}
       value={langSelect}
    />
        <Routes>
           <Route path="/" element={<Home setID={setIDCard} data={changeLocal}/>}/>
           <Route path="/post" element={<Post/>}/>
           <Route path="/paper" element={<Paper id={+IDCard} data={changeLocal}/>}/>
        </Routes>
     </>
  );
}

export default App;
