import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Settingss from './components/Settingss/Settingss';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Prealoader';

const ProfileContainer = React.lazy (() => import('./components/Profile/ProfileInfo/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
  componentDidMount () {
    this.props.initializeApp();
  }

  render() {

    if(!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar state={this.props.name}/>
          <div className="app-wrapper-content">
            <Suspense fallback={<Preloader/>} >
              <Routes>
                <Route path='/profile/:userId?' element={<ProfileContainer />} />
                <Route path='/dialogs' element={<DialogsContainer />} /> 
                <Route path='/music' element={<Music />} />
                <Route path='/news' element={<News />} />
                <Route path='/settingss' element={<Settingss />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<LoginPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);