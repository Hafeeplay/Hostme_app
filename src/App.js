// import logo from './logo.svg';
import './App.css';
import Website from './components/myweb/Website';
import Login from './components/login/Login';
import Register from './components/signup/Register';
// import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
    {/* <Router>
      <Switch>
        <Route path="/"><Website /></Route>
        <Route path="/Login"><Login /></Route>
        <Route path="/Register"><Register /></Route>
      </Switch>
    </Router> */}
    <Website />
    <Login />
    <Register />
    </div>
  );
}

export default App;
