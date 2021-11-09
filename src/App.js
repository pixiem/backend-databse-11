import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Placeorder from './components/placeorder/Placeorder';
import Myorder from './components/myorder/Myorder';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <div className="App">
    
      <AuthProvider>
        <Router>
          
        <Switch>
          <Route exact  path="/">
          <Home></Home>
         </Route>
          <Route path="/home">
          <Home></Home>
         </Route>
          <Route path="/login">
          <Login></Login>
         </Route>
          <Route path="/myorder">
          <Myorder></Myorder>
         </Route>
          <PrivateRoute  path="/placeorder/:serviceId">
          <Placeorder></Placeorder>
         </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
  
    </div>
  );
}

export default App;
