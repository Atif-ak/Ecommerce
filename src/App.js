import './App.css';
import ContactUs from './components/contactUs/ContactUs';
import CreateAccount from './components/createAccount/CreateAccount';
import Home from './components/homePage/Home';
import Gaming from './components/gamingzone/Gaming';
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import Navbar from './components/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import CardView from './components/Card/CardView';


function App() {
  return (
    <BrowserRouter>
 <div>
   <Navbar/>
   <Switch>
     <Route exact path='/'>
     <Home/>
     </Route>
     <Route path='/description'>
     <CardView/>
     </Route>
     <Route path='/gaming'>
     <Gaming/>
     </Route>
     <Route path='/contact'>
     <ContactUs/>
     </Route>
     <Route path='/login'>
     <Login/>
     </Route>
     <Route path='/createaccount'>
     <CreateAccount/>
     </Route>
     <Route path='/cart'>
     <Cart/>
     </Route>
     
   
   </Switch>
   {/* <Footer/> */}
 </div>
 </BrowserRouter>
  );
}

export default App;
