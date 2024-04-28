import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
// import {BrowserRouter,  Route} from 'react-router-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">


      <header className="wrapper">

       <Header/>
       <Navbar/>
       <div className="content">
    <Routes>
    <Route path='/' element= {<Profile/>}/>

        <Route path='/profile' element= {<Profile/>}/>
        <Route path='/dialogs' element= {<Dialogs/>}/>
    </Routes>

       </div>
       {/* <Profile name={"Elon Masc"}/> */}
      </header>


    </div>

      </BrowserRouter>
  );
}

export default App;
