import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
// import {BrowserRouter,  Route} from 'react-router-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App(props) {
  return (
    <BrowserRouter>
    <div className="App">


      <header className="wrapper">

       <Header/>
       <Navbar/>
       <div className="content">
    <Routes>
    {/* <Route path='/' element= {<Profile/>}/> */}
    {/* <Route path='/' element= {<Profile postsData={props.postsData}/>}/> */}

        {/* <Route path='/profile' render= {() =><Profile postsData={props.postsData}/>}/> */}
        <Route path='/profile' element= {<Profile postsData={props.state.profilePage.postsData} addPost={props.addPost}
        />}/>
        <Route path='/dialogs' element= {<Dialogs dialogNames={props.state.dialogsPage.dialogNames}
         messageItems={props.state.dialogsPage.messageItems}
         />}/>
    </Routes>

       </div>
       {/* <Profile name={"Elon Masc"}/> */}
      </header>


    </div>

      </BrowserRouter>
  );
}

export default App;
