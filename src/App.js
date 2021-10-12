
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/home'>
          <Home></Home>
       </Route>
       <Route path='/register'>
         <Register></Register>
       </Route>
       <Route path='/login'>
         <Login></Login>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
