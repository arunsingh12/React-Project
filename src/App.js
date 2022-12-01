import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { MenuBar } from './Components/Menubar/MenuBar';
import { CategoryPage } from './Pages/CategoryPage'; 
import {Footer} from './Components/Footer/Footer'
// import { ProductDetails } from './Components/Product Details/ProductDetails';
import { DetailsPage } from './Pages/DetailsPage';
import { SignUp } from './Components/Login & SignUp/SignUp';
import { Login } from './Components/Login & SignUp/Login';
import { AddToCart } from './Components/Add to cart/AddToCart';


function App() {
  return (
   <>
    <Router>
    <MenuBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/category' element={<CategoryPage/>}></Route>
        <Route path='/viewDetail/:vid' element={<DetailsPage/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/addcart' element={<AddToCart/>} ></Route>
        <Route path='/cartpage' element={<AddToCart/>} ></Route>
      </Routes>
      <Footer/>
    </Router>

   </>
  );
}

export default App;
