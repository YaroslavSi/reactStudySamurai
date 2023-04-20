import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settingss from './components/Settingss/Settingss';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.name}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<DialogsContainer />} /> 
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settingss' element={<Settingss />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;